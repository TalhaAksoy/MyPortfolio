import { useEffect } from "react";

export default function ScrollDiv() {
    useEffect(() => {
        let scrollDiv = document.querySelector("div#ScrollDiv");
        var scrollMax = window.scrollY || (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        window.onscroll = function () {
            let width = (window.scrollY / scrollMax) * 100;
            scrollDiv?.setAttribute("style", `width:${width}%`);
        }
    })
    return (
        <div id="ScrollDiv" className=" w-auto h-2 bg-purple-300 fixed bottom-0 left-0 z-20">
        </div>
    );
}