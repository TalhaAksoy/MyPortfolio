import React from "react";
import AngularIcon from "../../icons/Angular";
import CppIcon from "../../icons/Cpp";
import CssIcon from "../../icons/Css";
import FramerIcon from "../../icons/Framer";
import HtmlIcon from "../../icons/Html";
import JsIcon from "../../icons/Js";
import LuaIcon from "../../icons/Lua";
import NodeJsIcon from "../../icons/NodeJS";
import ReactIcon from "../../icons/React";
import TailwindCssIcon from "../../icons/Tailwindcss";
import Typescript from "../../icons/Typescript";

const AboutMe = () => {

	function rebuildText(str: string): string {
		let retStr = '';
		let inTag = false;
		let tagContent = '';
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '<') {
				inTag = true;
				tagContent = str[i];
			} else if (str[i] === '>') {
				inTag = false;
				tagContent += str[i];
				retStr += tagContent;
			} else if (inTag) {
				tagContent += str[i];
			} else {
				if (str[i] === '{') {
					retStr += '<span class="text-yellow-300">{</span>';
				} else if (str[i] === '}') {
					retStr += '<span class="text-yellow-300">}</span>';
				} if (str[i] == ':') {
					retStr += `<span class="text-purple-500">${str.slice(0, i)}</span>`
					retStr += '<span class="text-pink-500">:</span>'
					let tempStr = str.slice(i + 1, str.length).split("").map(item => {
						if (item == '[') {
							item = '<span class="text-orange-500">[ </span>'
						} else if (item == ']') {
							item = '<span class="text-orange-500"> ]</span>'
						}
						return item;
					});
					retStr += `<span class="text-green-500">${tempStr.join("")}</span>`
				}
			}
		}
		return retStr;
	}

	const codeArray = [
		{
			content: '{',
			space: ''
		},
		{
			content: 'Name : "Selim Talha Aksoy",',
			space: 'gap-x-8'
		},
		{
			content: 'Age : "21",',
			space: 'gap-x-8'
		},
		{
			content: 'Job : "Web Developer / Computer Programming Student",',
			space: 'gap-x-8'
		},
		{
			content: `Languages & Frameworks : ["Html","Css","JS / NodeJS / TS","React / Angular","TailwindCss , FramerMotion","C/Cpp","Lua"],`,
			space: 'gap-x-8'
		},
		{
			content: 'OldPage : <a href="https://42saksoy.netlify.app/" target="_blank" class="underline">Go To Page</a>,',
			space: 'gap-x-8'
		},
		{
			content: '}',
			space: ''
		},

	]

	const iconsRef = React.useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const container = containerRef.current;
		const icons = iconsRef.current;
		const speed = 2; // Hareket hızı (pixel/saniye)
		const directions = [-1, 1]; // Hareket yönleri (sol veya sağ)
		let containerRect : any; // Container'ın boyutları
		if (container) {
			containerRect = container.getBoundingClientRect();
			icons.forEach(icon => {
				if (icon && icon.style) {
					const { style } = icon;
					// Rastgele başlangıç konumu belirle (container boyutları içinde)
					style.left = `${Math.random() * containerRect.width}px`;
					style.top = `${Math.random() * containerRect.height}px`;
					console.log(`Container Width ${containerRect.width} , Container Height ${((containerRect.height * 85) / 100)}`)
				}
			});
		}
		const interval = setInterval(() => {
			icons.forEach(icon => {
				if (icon && icon.style) {
					const { style } = icon;
					let left = parseFloat(style.left || "0");
					let top = parseFloat(style.top || "0");
					let directionX = directions[Math.floor(Math.random() * directions.length)]; // Rastgele x yönü seç
					let directionY = directions[Math.floor(Math.random() * directions.length)]; // Rastgele y yönü seç
					left += speed * directionX;
					top += speed * directionY;
					// Ekran sınırlarına çarpma kontrolü
					if (left < containerRect.left) left = containerRect.left;
					if (left > containerRect.left + containerRect.width) left = containerRect.width;
					if (top < containerRect.top) top = containerRect.top;
					if (top > containerRect.top + containerRect.height) top = containerRect.height;
					style.left = left + "px";
					style.top = top + "px";
				}
			});
		}, 50); // Hareket güncelleme aralığı (ms)
		return () => clearInterval(interval);
	}, []);
	


	const iconComponents = [
		<HtmlIcon />,
		<CssIcon />,
		<JsIcon />,
		<NodeJsIcon />,
		<Typescript />,
		<ReactIcon />,
		<AngularIcon />,
		<TailwindCssIcon />,
		<FramerIcon />,
		<CppIcon />,
		<LuaIcon />
	];


	// const LangArray : Record<string, JSX.Element> = {
	// 	"Html" : <HtmlIcon/>,
	// 	"Css" : <CssIcon/>,
	// 	"Js" : <JsIcon/>,
	// 	"NodeJS" : <NodeJsIcon/>,
	// 	"TypeScript" : <Typescript/>,
	// 	"React" : <ReactIcon/>,
	// 	"Angular" : <AngularIcon/>,
	// 	"TailwindCss" : <TailwindCssIcon/>,
	// 	"Framer" : <FramerIcon/>,
	// 	"Cpp" : <CppIcon/>,
	// 	"Lua" : <LuaIcon/>
	// }


	return (
		<>
			<div id="0" className="w-full h-screen page relative flex justify-center items-center">
				<div ref={containerRef} className=" relative  text-white/80 w-10/12 h-4/6 overflow-hidden">
					{iconComponents.map((Icon, index) => (
						<div
							key={index}
							ref={el => (iconsRef.current[index] = el)}
							className="absolute transition-all duration-300 -translate-x-1/2 -translate-y-1/2"
							style={{ zIndex: iconComponents.length - index }} // Z-index değerlerini her bir ikonun indexine göre ayarlıyoruz
						>
							{Icon}
						</div>
					))}
				</div>
				<div className="absolute bg-[#4d425f]/70 xl:w-1/2 w-11/12 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-main-textColor flex flex-col justify-start p-2 font-jetbrains z-30">
					{codeArray.map((item, index) => (
						<span className={`flex ${item.space} py-1`}>
							<span className="text-gray-400 w-10">{index + 1}</span>
							<span className="w-full" dangerouslySetInnerHTML={{ __html: rebuildText(item.content) }}></span>
						</span>
					))}
				</div>
			</div>
		</>
	)
}

export default AboutMe