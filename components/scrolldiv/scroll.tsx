import { useEffect } from "react";

export default function ScrollDiv() {
    useEffect(() => {
        let scrollDiv = document.querySelector("div#ScrollDiv");
        var scrollMax = window.scrollY || (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        window.onscroll = function () {
            let width = (window.scrollY / scrollMax) * 100;
            scrollDiv?.setAttribute("style", `height:${width}%`);
        }
    })
    return (
        <div id="ScrollDiv" className=" w-2 h-auto bg-purple-300 fixed top-0 right-0 z-20">
        </div>
    );
}