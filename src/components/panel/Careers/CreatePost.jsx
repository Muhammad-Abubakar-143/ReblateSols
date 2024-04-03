import { useState } from "react";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { db } from "../../../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PulseLoader from "react-spinners/PulseLoader";

const CreatePost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [jobPost, setJobPost] = useState({
        title: "Dev",
        desc: "MERN",
        exp: "3",
        role: "Senior",
        location: "Jhelum",
        type: "On-Site",
    });

    const handleChange = (attr, value) => {
        setJobPost(prevJobPost => ({
            ...prevJobPost,
            [attr]: value
        }));
    };

    const postJobHandler = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const { title, desc, exp, role, location, type } = jobPost;
            const docRef = await addDoc(collection(db, "Careers"), {
                title,
                desc,
                exp,
                role,
                location,
                type
            });
            console.log("Document written with ID: ", docRef.id);
            toast.success('Post created successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (e) {
            console.error("Error adding document: ", e);
            toast.error('An error occured!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        setIsLoading(false);

    }

    return (
        <div className="text-black flex flex-col gap-4">
            <ToastContainer />
            <form
                onSubmit={postJobHandler}
                className="[&>*]:border-slate-400 [&>*]:p-3 [&>*]:rounded w-full md:w-3/5 flex flex-col gap-4 rounded py-6 px-4 xs:px-8 bg-white shadow-md mx-auto border border-gray-400"
            >
                <h1 className="mb-4 text-primary text-2xl text-center font-bold underline">Career Post</h1>
                <input
                    type="text"
                    value={jobPost.title}
                    placeholder="Job Title"
                    onChange={(e) => handleChange("title", e.target.value)}
                    className="bg-gray-100 outline-none border"
                />
                <textarea
                    value={jobPost.desc}
                    rows={1}
                    placeholder="Job Description"
                    onChange={(e) => handleChange("desc", e.target.value)}
                    className="scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-32 overflow-y-scroll bg-gray-100 outline-none border rounded-lg p-4"
                />
                <input
                    type="number"
                    value={jobPost.exp}
                    placeholder="Experience"
                    onChange={(e) => handleChange("exp", e.target.value)}
                    className="bg-gray-100 outline-none border"
                />
                <input
                    type="text"
                    value={jobPost.role}
                    placeholder="Role"
                    onChange={(e) => handleChange("role", e.target.value)}
                    className="bg-gray-100 outline-none border"
                />
                <input
                    type="text"
                    value={jobPost.location}
                    placeholder="Job Location"
                    onChange={(e) => handleChange("location", e.target.value)}
                    className="bg-gray-100 outline-none border"
                />
                <select
                    value={jobPost.type}
                    onChange={(e) => handleChange("type", e.target.value)}
                    className="bg-gray-100 outline-none border text-primary">
                    <option value="On-Site">On-Site</option>
                    <option value="Remote">Remote</option>
                </select>
                <button className="flex justify-center items-center align-center gap-4 mt-6 ml-auto bg-gray-700 border border-gray-700 hover:bg-gray-700 hover:shadow-md hover:scale-[101%] rounded-lg text-white font-bold text-md py-4" type="submit">
                    {isLoading ? <PulseLoader color="lightgray" size={8} /> : null }
                    Submit</button>
            </form>

        </div>
    );
}

export default CreatePost;