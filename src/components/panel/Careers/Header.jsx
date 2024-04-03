import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ setMenu, subTabs, activeSubTab, subTabHandler }) => {
    return (
        <div className="w-full flex flex-col text-white border-l border-gray-700">
            <div className="px-4 md:px-8 h-16 md:h-24 flex justify-between items-center bg-gray-800">
                <RxHamburgerMenu
                    className="hover:scale-110 duration-300"
                    size={32}
                    onClick={setMenu} />
                User
            </div>
            <ul className="flex items-center gap-2 md:gap-8 px-2 md:px-8 bg-gray-400 text-white text-sm sm:text-base  border-b border-slate-500">
                {subTabs.map((tab) => {
                    return (
                        <li
                            key={tab}
                            onClick={() => subTabHandler(tab)}
                            className={`bg-gray-400 border-b-2 px-5 py-3 duration-200 ${activeSubTab === tab ? 'text-slate-800 border-primary font-semibold' : 'border-transparent'}`}>{tab}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Header;