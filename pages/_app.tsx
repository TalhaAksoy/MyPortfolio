import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MyNavbar from '../components/navbar/navbar';
import Head from 'next/head';
import ScrollDiv from '../components/scrolldiv/scroll';
import MobileOpenButton from '../components/navbar/mobileopen';

export default function App({ Component, pageProps }: AppProps) {
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
