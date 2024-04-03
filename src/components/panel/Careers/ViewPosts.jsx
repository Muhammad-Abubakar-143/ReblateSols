import { useState, useEffect } from "react";
import { doc, collection, getDocs, deleteDoc,  } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { db } from "../../../../firebase";
import JobCard from "./JobCard";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewPosts = () => {
    const [fetchedPosts, setFetchedPosts] = useState([]);
    const fetchPost = async () => {
        await getDocs(collection(db, "Careers"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setFetchedPosts(newData);
            })
    }

    useEffect(() => {
        fetchPost();
    }, [])

    const deletePost = async (postId) => {
        try {
          const postRef = doc(db, 'Careers', postId);
          await deleteDoc(postRef);
          setFetchedPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
          toast.success('Post created successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
        } catch (error) {
          console.error('Error deleting post: ', error);
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
      };

    const deleteAllPosts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Careers'));
            if (querySnapshot.docs.length > 0) {
                const deletionPromises = querySnapshot.docs.map(async (doc) => {
                    await deleteDoc(doc.ref);
                    console.log(`Document with ID ${doc.id} deleted successfully.`);
                });
                await Promise.all(deletionPromises);
                setFetchedPosts([]);
                toast.success('Post created successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } catch (error) {
            console.error('Error deleting documents: ', error);
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
    };


    return (
        <>
            <ToastContainer />
            <h1 className="text-center text-primary font-bold text-xl">
                {fetchedPosts.length > 0 ? "Job Posts" : "No posts available"}
            </h1>
            {fetchedPosts.length > 0 ? <button onClick={deleteAllPosts} className="text-sm rounded shadow border border-red-600 bg-red-500 active:bg-red-500 hover:bg-red-700 mx-2 md:mx-8 ml-auto md:ml-auto mt-6 mb-2 p-4 text-white flex gap-4 items-center align-center justify-center">
                Delete All <MdDelete size={24} />
            </button> : null}
            <div className="w-full flex flex-wrap align-center justify-start p-2 md:p-8 gap-8">
                {fetchedPosts ?
                    fetchedPosts.map((post) => {
                        return (
                            // <div className="w-vw">
                            <JobCard
                                id={post.id}
                                title={post.title}
                                desc={post.desc}
                                exp={post.exp}
                                role={post.role}
                                location={post.location}
                                type={post.type}
                                change={true}
                                deletePost={deletePost}
                            />
                            // </div>
                        )
                    }) : null}
            </div>
        </>
    );
}

export default ViewPosts;