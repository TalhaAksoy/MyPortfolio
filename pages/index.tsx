import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SvgBG from '../components/background/background'
import MySkills from '../components/myskills/myskills'
import {BiDownArrow} from "@react-icons/all-files/bi/BiDownArrow"

function WelcomePlace(){
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen select-none'>
      <div className='w-auto flex flex-col justify-center items-center p-2 gap-y-4 mb-4'>
        <span className='text-5xl text-white font-bold flex justify-start items-start w-full'>Welcome</span>
        <span className='text-5xl text-white font-bold flex justify-start items-start w-full'>To</span>
        <span className='text-5xl text-white font-bold flex justify-start items-start w-full'>My</span>
        <span className='text-5xl text-white font-bold flex justify-start items-start w-full'>Portfolio</span>
        <span className='text-5xl text-white font-bold flex justify-start items-start w-full'>Page</span>
      </div>
      <a href="#skillsPage" className='text-white transition-all duration-200 hover:scale-150'><BiDownArrow size="30"></BiDownArrow></a>
    </div>
  );
}

export default function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col overflow-auto justify-center items-center'>
      <SvgBG></SvgBG>
      <WelcomePlace></WelcomePlace>
      <MySkills></MySkills>
    </div>
  )
}
