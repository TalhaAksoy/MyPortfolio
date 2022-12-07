import {AiOutlineHome} from "@react-icons/all-files/ai/AiOutlineHome"
import {AiOutlineInstagram} from "@react-icons/all-files/ai/AiOutlineInstagram"
import {AiOutlineYoutube} from "@react-icons/all-files/ai/AiOutlineYoutube"
import {AiOutlineLinkedin} from "@react-icons/all-files/ai/AiOutlineLinkedin"
import {AiOutlineGithub} from "@react-icons/all-files/ai/AiOutlineGithub"
import {FaTelegram} from "@react-icons/all-files/fa/FaTelegram"
import {AiOutlineQuestionCircle} from "@react-icons/all-files/ai/AiOutlineQuestionCircle"
import Link from "next/link"

function SidebarIcon({icon , text}:any){
    return(
        <div className="relative flex items-center justify-center mt-2 mb-2 p-2 sm:h-16 sm:w-16 w-14 h-14 transition-all duration-300 group hover:bg-black hover:rounded-md">
            <span className="text-3xl">{icon}</span>
            <span className="absolute sm:block hidden w-auto p-2 m-2 min-w-max left-16 rounded-md shadow-md text-white bg-gray-800 text-md font-bold transition-all duration-100 scale-0 group-hover:scale-100 origin-left">
                {text}
            </span>
        </div>
    );
}

export default function MyNavbar(){
    return(
        <div id="Navbar" className='sm:w-24 w-0 h-screen fixed top-0 left-0 m-0 z-10 flex flex-col text-white items-center bg-white/30 backdrop-blur-md pt-4 sm:overflow-visible overflow-y-scroll transition-all duration-300'>
            <Link href="/">
                <SidebarIcon icon={<AiOutlineHome size="32"></AiOutlineHome>} text="Home"></SidebarIcon>
            </Link>
            <span className="border-[1px] sm:w-16 w-14"></span>
            <SidebarIcon icon={<AiOutlineQuestionCircle size="32"></AiOutlineQuestionCircle>} text="Coming Soon..."></SidebarIcon>
            <SidebarIcon icon={<AiOutlineQuestionCircle size="32"></AiOutlineQuestionCircle>} text="Coming Soon..."></SidebarIcon>
            <Link href="/cppProject">
                <SidebarIcon icon="C++" text="C && C++ Project"></SidebarIcon>
            </Link>
            <span className="border-[1px] sm:w-16 w-14"></span>
            <Link href="https://www.instagram.com/tlhksy3" target="_blank">
                <SidebarIcon icon={<AiOutlineInstagram size="32"></AiOutlineInstagram>} text="Instagram"></SidebarIcon>
            </Link>
            <Link href="https://www.youtube.com/@alhazentr" target="_blank">
                <SidebarIcon icon={<AiOutlineYoutube size="32"></AiOutlineYoutube>} text="Youtube"></SidebarIcon>
            </Link>
            <Link href="https://t.me/AlhazenTR" target="_blank">
                <SidebarIcon icon={<FaTelegram size="32"></FaTelegram>} text="Telegram"></SidebarIcon>
            </Link>
            <Link href="https://www.linkedin.com/in/selim-talha-aksoy-1b1649233/" target="_blank">
                <SidebarIcon icon={<AiOutlineLinkedin size="32"></AiOutlineLinkedin>} text="LinkedIn"></SidebarIcon>
            </Link>
            <Link href="https://github.com/TalhaAksoy" target="_blank">
                <SidebarIcon icon={<AiOutlineGithub size="32"></AiOutlineGithub>} text="Github"></SidebarIcon>
            </Link>
        </div>
    );
}