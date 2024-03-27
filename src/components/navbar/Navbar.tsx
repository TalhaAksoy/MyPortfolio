import React from "react";
import usePage from "../../store/page";

const Logo = (props: { firstText: string, secondText: string }) => {

	const {setPage} = usePage();

	return (
		<>
			<a href="#0" onClick={() => {setPage(0)}} className={`w-48 h-12 relative overflow-hidden font-bold font-silkscreen group`}>
				<span className="absolute top-1/2 -translate-y-1/2 group-hover:-translate-y-[200%] transition-all duration-300 w-full text-start select-none text-transparent bg-clip-text bg-gradient-to-b from-[#6c35de] from-20% to-[#cb80ff]">{props.firstText}</span>
				<span className="absolute bottom-1/2 translate-y-[200%] group-hover:translate-y-1/2 transition-all duration-300 w-full text-start text-transparent bg-clip-text bg-gradient-to-b from-[#cb80ff] from-20% to-[#6c35de] select-none">{props.secondText}</span>
			</a>
		</>
	)
}

const Menu = () => {

	const menuArray = [
		{
			id : '#0',
			name : 'About Me'
		},
		{
			id : '#1',
			name : 'Social Media'
		},
	]

	const translateArray = [
		'-translate-x-[100%]',
		'translate-x-[0%]',
	]

	const {page} = usePage();

	return (
		<>
			<div className="flex justify-end w-1/2 h-16 relative">
				<span className={`absolute top-0 right-0 -z-[1] w-1/4 h-16 flex justify-center items-center ${translateArray[page]} transition-all duration-300`}>
					<span className=" bg-main-navbarSwitch px-1 py-2 rounded-md transition-all duration-300 delay-300">{menuArray[page].name}</span>
				</span>
				{
					menuArray.map((item , index) => (
							<a className={`w-1/4 h-16 flex select-none justify-center items-center transition-all duration-300 delay-300 ${page === index ? 'text-main-textColor' : 'text-main-deactiveText'} cursor-pointer`} key={index} onClick={() => {window.location.hash = `#${index}`}} >{item.name}</a>
							))
				}
				{/** href={item.id} | onClick={() => {setPage(index)}} */}
			</div>
		</>
	)
}

const Navbar = () => {

	const [scrolled, setScrolled] = React.useState<boolean>(false);

	React.useEffect(() => {
		function onScroll() {
			setScrolled(window.scrollY > 0);
		}

		document.addEventListener("scroll", onScroll);
	}, [scrolled])



	return (
		<>
			<nav className={`fixed top-5 left-1/2 -translate-x-1/2  border rounded-md w-1/2 h-16 flex justify-between items-center px-4 transition-all duration-300 z-[999] lg:backdrop-blur-lg bg-white/10`}>
				<Logo firstText="// AlhazenTR" secondText="// Talha Aksoy" />
				<Menu/>
			</nav>
		</>
	)
}

export default Navbar