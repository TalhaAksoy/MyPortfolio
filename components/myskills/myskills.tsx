import {FaPython} from '@react-icons/all-files/fa/FaPython'
import NextLogo from './Nextlogo.svg'
import CppLogo from './Cpplogo.svg'
import {SiTailwindcss} from '@react-icons/all-files/si/SiTailwindcss'
import {FaWordpress} from '@react-icons/all-files/fa/FaWordpress'
import {AiOutlineHtml5} from '@react-icons/all-files/ai/AiOutlineHtml5'
import {DiCss3} from '@react-icons/all-files/di/DiCss3'
import {DiReact} from '@react-icons/all-files/di/DiReact'
import {SiJavascript} from '@react-icons/all-files/si/SiJavascript'
import Image from 'next/image';

export default function MySkills() {
    return (
        <div id="skillsPage" className='w-full min-h-screen flex flex-col justify-center items-center pt-2 pb-2 gap-y-8'>
            <div className='flex flex-col justify-center items-center text-center'>
                <span className='text-white font-JetBrainsMonoBold text-2xl'>Programming Languages and Software I Know</span>
                <div className='flex justify-center items-center p-4 gap-x-4 flex-wrap sm:w-full w-1/2'>
                    <Image src={NextLogo} alt='logo' className='w-16 h-16 select-none'></Image>
                    <DiReact size='64' className='text-white'></DiReact>
                    <FaWordpress size='64' className='text-white'></FaWordpress>
                    <SiTailwindcss size='64' className='text-white'></SiTailwindcss>
                    <AiOutlineHtml5 size='64' className='text-white'></AiOutlineHtml5>
                    <DiCss3 size='64' className='text-white'></DiCss3>
                    <SiJavascript size='64' className='text-white'></SiJavascript>
                    <FaPython size='64' className='text-white'></FaPython>
                    <Image src={CppLogo} alt='logo' className='w-16 h-16 select-none'></Image>
                    <span className=' font-JetBrainsMonoBold text-7xl text-white select-none'>C</span>
                </div>
            </div>
        </div>
    );
}