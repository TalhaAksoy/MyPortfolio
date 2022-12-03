import { useEffect } from "react";

export default function ScrollDiv() {
    useEffect(() => {
        console.log("|asd");
        let scrollDiv = document.querySelector("div#ScrollDiv");
        let scrollMax = document.body.offsetHeight - window.innerHeight;
        window.onscroll = function () {
            console.log("asd");
            let width = (window.scrollY / scrollMax) * 100;
            scrollDiv?.setAttribute("style", `height:${width}%`);
        }
    })
    return (
        <div id="ScrollDiv" className=" w-2 h-auto bg-purple-300 fixed top-0 right-0 z-20 transition-all duration-1000">

        </div>
    );
}