import SvgBG from "../components/background/background";
import Link from "next/link";
import Cpng from '../imgs/c.png';
import CppPng from '../imgs/cpp.png';
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectLine = ({ Lang, Desc, Link, Img }: any) => {
    return (
        /*<div className="sm:w-10/12 w-11/12 text-center border-2 sm:h-20 flex sm:flex-row sm:gap-y-0 gap-y-2 flex-col justify-start items-center rounded-md sm:py-0 py-2 text-white sm:transition-all sm:duration-200 sm:hover:bg-white sm:hover:text-black group">
            <div id="Project Lang" className="select-none text-4xl font-JetBrainsMonoBold w-1/12 h-full flex justify-center items-center">
                {Lang}
            </div>
            <div className="select-none text-xl font-JetBrainsMonoBold w-9/12 h-full flex justify-center items-center sm:border-l-2 sm:border-r-2 sm:border-b-0 sm:border-t-0 border-t-2 border-b-2 sm:px-2 py-2 sm:transition-all sm:duration-200 sm:group-hover:border-black">
                {Desc}
            </div>
            <div className=" sm:w-2/12 w-full h-full flex justify-center items-center text-2xl">
                <a href={Link} className="w-full" target="_blank" rel="noreferrer">Project Link</a>
            </div>
        </div>*/
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
            <figure><Image src={Img} alt="logo" className="w-full h-1/2 object-contain"></Image></figure>
            <div className="card-body">
                {/* <h2 className="card-title">
                    Shoes!
                </h2> */}
                <p>{Desc}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{Lang}</div>
                </div>
            </div>
            <a href={Link} className="w-full">
                <button className="btn w-full bg-purple-600 text-white">Project Page</button>
            </a>
        </div>
    );
}

const CppProject = () => {
    return (
        <div className="w-full min-h-screen flex flex-row flex-wrap justify-center items-center pt-6 gap-4 sm:px-10 p-0">
            <SvgBG></SvgBG>
            <ProjectLine Lang="C" Img={Cpng} Desc="42Cursus-Libft : First C Project make a library" Link="https://github.com/TalhaAksoy/42Cursus-Libft"></ProjectLine>
            <ProjectLine Lang="C" Img={Cpng} Desc="42Cursus-Philosophers : Multithreading" Link="https://github.com/TalhaAksoy/42Cursus-Philosophers"></ProjectLine>
            <ProjectLine Lang="C" Img={Cpng} Desc="42Cursus-Minishell : Make a Shell" Link="https://github.com/TalhaAksoy/42Cursus-Minishell"></ProjectLine>
            <ProjectLine Lang="C" Img={Cpng} Desc="42Cursus-Push-Swap : Write Sorting Algorithm" Link="https://github.com/TalhaAksoy/42Cursus-Push-Swap"></ProjectLine>
            <ProjectLine Lang="C" Img={Cpng} Desc="42Cursus-So-Long : Make a Game" Link="https://github.com/TalhaAksoy/42Cursus-So_Long"></ProjectLine>
            <ProjectLine Lang="C++" Img={CppPng} Desc="42Cursus-Cpp-Modules: 8 Cpp Modules" Link="https://github.com/TalhaAksoy/42Cursus-CppModules"></ProjectLine>
        </div>
    );
}

export default CppProject;
