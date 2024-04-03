import { Link } from "react-router-dom";
import { reblateWhite } from "../../../assets";
import { IoMdHome } from "react-icons/io";

const Menu = ({ setMenu, tabs, activeTab, tabHandler }) => {
    return (
        <div className="absolute top-0 left-0 w-full text-white bg-gray-100">
            <div
                onClick={setMenu} 
                className="fixed top-0 left-0 z-40 w-full h-screen md:hidden bg-primary/50"></div>
            <div className="fixed top-0 left-0 z-50 w-9/12 h-screen md:w-72 md:flex flex-col px-4 bg-gray-800">
                <div className="flex items-center justify-between gap-8 px-2 py-4 md:p-4">
                    <Link to="/" onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                        <img
                            src={reblateWhite}
                            alt="Reblate Logo"
                            className="w-52 md:w-full md:mx-auto object-contain"
                        />
                    </Link>
                </div>
                <section className="pt-4 border-t border-gray-700">
                    <h2 className="text-sm font-bold text-slate-400 py-4">Menu</h2>
                    <ul className="flex flex-col gap-2">
                        {tabs.map((tab) => {
                            return (
                                <li
                                    key={tab}
                                    onClick={() => tabHandler(tab)}
                                    className={`${activeTab === tab ? 'bg-gray-500 text-primary font-semibold shadow-md border-r border-gray-300' : ''} flex gap-4 items-center active:bg-gray-500 active:scale-[102%] hover:bg-gray-400 hover:text-primary duration-300 rounded px-4 py-3`}>
                                    <IoMdHome />
                                    {tab}
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Menu;