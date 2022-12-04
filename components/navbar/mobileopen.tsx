import { useEffect } from "react";
import {AiOutlineRight} from "@react-icons/all-files/ai/AiOutlineRight"
import {AiOutlineLeft} from "@react-icons/all-files/ai/AiOutlineLeft"

export default function MobileOpenButton(){
    useEffect(() => {
        const navbar = document.querySelector("div#Navbar");
        const mobileOpenBtn = document.querySelector("div#MobileOpenBtn");
        const leftIcon = document.querySelector("#left");
        const rightIcon = document.querySelector("#right");
        let i = 0;
        mobileOpenBtn?.addEventListener('click', function(){
            i++;
            if (i % 2 !== 0){
                navbar?.classList.remove("w-0");
                navbar?.classList.add("w-16");
                mobileOpenBtn.classList.remove("left-0");
                mobileOpenBtn.classList.add("left-16");
                rightIcon?.classList.add("hidden");
                leftIcon?.classList.remove("hidden");
            }
            else{
                navbar?.classList.add("w-0");
                navbar?.classList.remove("w-16");
                mobileOpenBtn.classList.add("left-0");
                mobileOpenBtn.classList.remove("left-16");
                rightIcon?.classList.remove("hidden");
                leftIcon?.classList.add("hidden");
            }
        })
    })
    return (
        <div id="MobileOpenBtn" className="sm:hidden w-auto h-12 bg-white/30 backdrop-blur-md fixed top-1/2 -translate-y-1/2 text-white left-0 z-10 transition-all duration-300 flex justify-center items-center rounded-tr-md rounded-br-md">
            <AiOutlineRight size="32" id="right"></AiOutlineRight>
            <AiOutlineLeft size="32" className="hidden" id="left"></AiOutlineLeft>
        </div>
    );
}