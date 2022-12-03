import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MyNavbar from '../components/navbar/navbar';
import Head from 'next/head';
import ScrollDiv from '../components/scrolldiv/scroll';

export default function App({ Component, pageProps }: AppProps) {
	return(
		<div className='relative'>
			<Head>
				<title>42 Saksoy</title>
			</Head>
			<MyNavbar></MyNavbar>
			<ScrollDiv></ScrollDiv>
			<Component {...pageProps} />
		</div>
	);
}
