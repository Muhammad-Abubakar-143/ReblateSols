import { useState } from "react";
import Menu from "../components/panel/Careers/Menu";
import Header from "../components/panel/Careers/Header";
import CreatePost from "../components/panel/Careers/CreatePost";
import ViewPosts from "../components/panel/Careers/ViewPosts";

const Panel = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeTab, setActiveTab] = useState('Careers');
    const [activeSubTab, setActiveSubTab] = useState('View Posts');

    const tabs = ['Home', 'About', 'Services', 'Careers'];
    const subTabs = ['Create Post', 'View Posts'];

    const setMenu = () => {
        setShowMenu(!showMenu)
    }
    const tabHandler = (tab) => {
        setActiveTab(tab);
    }
    const subTabHandler = (tab) => {
        setActiveSubTab(tab)
    }
    return (
        <div className="w-full min-h-screen bg-gray-300 flex">
            <div
            className={`z-40 md:fixed ease-in-out duration-500 ${showMenu ? "" : "hidden"} md:${showMenu ? "translate-x-0" : "translate-x-[-18rem]"}`}>
                <Menu
                    setMenu={setMenu}
                    tabs={tabs}
                    activeTab={activeTab}
                    tabHandler={tabHandler}
                />
            </div>
            <section className={`w-full ease-in-out duration-500 ${showMenu ? "md:ml-72" : "ml-0"}`}>
                <Header
                    setMenu={setMenu}
                    subTabs={subTabs}
                    activeSubTab={activeSubTab}
                    subTabHandler={subTabHandler}
                />
                {activeTab === tabs[3]
                    ?
                    <div className="py-8 px-4 xs:p-8 md:p-16">
                        {activeSubTab === subTabs[0] ? <CreatePost /> : null}
                        {activeSubTab === subTabs[1] ? <ViewPosts /> : null}
                    </div>
                    :
                    <div className="text-center text-primary mt-16">Working...!</div>}
            </section>
        </div>
    );
}

export default Panel;