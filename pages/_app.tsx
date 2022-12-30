import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MyNavbar from '../components/navbar/navbar';
import Head from 'next/head';
import ScrollDiv from '../components/scrolldiv/scroll';
import MobileOpenButton from '../components/navbar/mobileopen';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
        let mobileMenu = document.querySelector("div#Navbar");
        let mobileBtn = document.querySelector("div#MobileOpenBtn");
        const rightIcon = document.querySelector("#right");

        if (mobileMenu?.classList.contains("w-10/12") === true){
            mobileMenu.classList.remove("w-10/12");
            mobileMenu.classList.add("w-0");
            mobileBtn?.classList.remove("left-[83.333333%]");
            mobileBtn?.classList.add("left-0");
            rightIcon?.classList.remove("rotate-180");
        }
    })
	return(
		<div className='relative'>
			<Head>
				<title>42 Saksoy</title>
			</Head>
			<MyNavbar></MyNavbar>
			<MobileOpenButton></MobileOpenButton>
			<ScrollDiv></ScrollDiv>
			<Component {...pageProps} />
		</div>
	);
}
