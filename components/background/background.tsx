import Image from "next/image";
import MySvg from './AnimationBG.svg';

export default function SvgBG(){
    return(
        <div className="w-full h-screen bg-black fixed top-0 left-0 -z-10">
            <Image src={MySvg} alt="background" className="w-full h-full object-cover select-none"></Image>
        </div>
    );
}