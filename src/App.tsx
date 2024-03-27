import React from "react"
import Navbar from "./components/navbar/Navbar"
import usePage from "./store/page";
import AboutMe from "./pages/aboutMe/AboutMe";
import Social from "./pages/social/Social";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

function App() {

	const { page, setPage } = usePage();

	React.useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('.page');
			sections.forEach((section) => {
				const rect = section.getBoundingClientRect();
				if (rect.top <= 0 && rect.bottom >= 0) {
					setPage(Number(section.id));
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [page])



	return (
		<>
			<div className="fixed inset-0">
				<BackgroundGradientAnimation></BackgroundGradientAnimation>
			</div>
			<Navbar />
			<AboutMe />
			<Social/>
			{/* <div id="2" className="w-full h-screen bg-gradient-to-b from-red-900 to-blue-900 page">
			</div>
			<div id="3" className="w-full h-screen bg-gradient-to-b from-red-900 to-blue-900 page">
			</div> */}
		</>
	)
}

export default App
