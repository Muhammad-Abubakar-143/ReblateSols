import React from "react";
import { MainTeam, team } from "../constants/team";
import { RxCross2 } from "react-icons/rx";

const TeamDetailsModal = ({modalHandler, id, type}) => {
    console.log(type)
    // const filteredData = MainTeam.filter(detail => detail.id === targetId);
    const filteredMember = type === "mainTeam" ? MainTeam.filter(detail => detail.id === id) : team.filter(detail => detail.id === id);
    // console.log(filteredTeamMember[0].title)
    return (
        <div className="z-50 flex w-full h-screen items-center fixed">
            <div onClick={modalHandler} className="absolute z-40 w-full h-screen bg-gray-300 opacity-50 text-black "></div>
            <div className="flex flex-col sm:flex-row z-50 mx-auto w-5/6 md:2/3 lg:w-1/2 bg-tertiary py-8 rounded-xl shadow-lg mb-12">
                <div className="flex-1 flex flex-col items-center justify-center gap-8 border-0 border-b sm:border-r sm:border-b-0 border-gray-600 px-4 py-4">
                    <img src="" alt="..." className="w-32 h-32 rounded-full" />
                    <div className="text-center">
                        <h1 className="text-lg font-bold">{ filteredMember[0].title }</h1>
                        <span className="text-sm">Hollywood Actor</span>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-2 px-4 text-sm sm:text-base py-2">
                    <div className="w-full sm:flex justify-between items-center align-center text-center mb-4">
                        <div className="hidden sm:block w-8"></div>
                        <div className="text-xl font-bold text-center">Details</div>
                        <div onClick={modalHandler} className="hidden sm:block"><RxCross2 /></div>
                    </div>
                    <h2 className="font-bold">Position:&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-normal">Actor</span></h2>
                    <h2 className="font-bold">Skills:&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-normal">Stunts</span></h2>
                    <h2 className="font-bold">Experience:&nbsp;&nbsp;&nbsp;&nbsp;<span className="font-normal">40 Years</span></h2>
                    <h2 className="font-bold flex">
                        Bio:&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="font-normal text-[12px]">Tom Cruise is an acclaimed actor and producer renowned for his iconic roles in blockbuster films.</span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default TeamDetailsModal;