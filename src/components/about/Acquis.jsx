import React from "react";
import { FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiC, SiOcaml } from "react-icons/si";

export default function Acquis() {
    return (
        <div className="grid grid-cols-4 flex flex-row flex-wrap justify-center items-center text-white p-5 mt-5 gap-5">
            
            
            <div className="flex items-center justify-center p-6 rounded-xl shadow-lg border border-blue-300 
                            hover:bg-blue-500 transition duration-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FaPython size={60} color="white" />
            </div>


            <div className="flex items-center justify-center p-6 rounded-xl shadow-lg border-2 border-yellow-300 
                            hover:bg-yellow-400 transition duration-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FaJs size={60} color="white" />
            </div>


            <div className="flex items-center justify-center p-6 rounded-xl shadow-lg border-2 border-blue-300 
                            hover:bg-blue-400 transition duration-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FaReact size={60} color="white" />
            </div>


            <div className="flex items-center justify-center p-6 rounded-xl shadow-lg border-2 border-green-300 
                            hover:bg-green-500 transition duration-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FaNodeJs size={60} color="white" />
            </div>


            <div className="flex items-center justify-center p-6 rounded-xl shadow-lg border-2 border-orange-300 
                            hover:bg-orange-400 transition duration-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FaHtml5 size={60} color="white" />
            </div>


            <div className="flex items-center justify-center p-6 rounded-xl shadow-lg border-2 border-red-400 
                            hover:bg-red-500 transition duration-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FaJava size={60} color="white" />
            </div>


            <div className="flex items-center justify-center p-6 rounded-xl shadow-lg border-2 border-gray-500 
                            hover:bg-gray-600 transition duration-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <SiC size={60} color="white" />
            </div>



            <div className="flex items-center justify-center p-6  rounded-xl shadow-lg border-2 border-yellow-600 
                            hover:bg-yellow-600 transition duration-300 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <SiOcaml size={60} color="white" />
            </div>

        </div>
    );
}
