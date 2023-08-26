import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const navLists = (
		<>
			<li className="font-semibold text-lg">
				<Link to="/">Home</Link>
			</li>
			<li className="font-semibold text-lg">
				<button onClick={() => scrollToSection("about")}>About</button>
			</li>
			<li className="font-semibold text-lg">
				<button onClick={() => scrollToSection("skills")}>Skills</button>
			</li>
			<li className="font-semibold text-lg">
				<button onClick={() => scrollToSection("projects")}>Projects</button>
			</li>
			<li className="font-semibold text-lg">
				<button onClick={() => scrollToSection("contact")}>Contact</button>
			</li>
			<li className="font-semibold text-lg">
				<Link to="/blogs">Blogs</Link>
			</li>
			<button className="btn btn-outline btn-info">Resume</button>
		</>
	);

	return (
		<div className="navbar font-bold">
			<div className="flex md:hidden ">
				<div className="dropdown">
					<label
						tabIndex={0}
						className="btn btn-ghost btn-circle"
						onClick={() => {
							setClick(!click);
						}}
					>
						<svg fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className={`menu menu-compact z-10 dropdown-content mt-3 gap-2 p-2 shadow bg-base-100 rounded-box w-52 ${click ? "hidden" : "flex"}`}
					>
						{navLists}
					</ul>
				</div>
			</div>

			<div className="w-full flex lg:justify-between">
				<div className="navbar-start w-auto flex items-center">
					<Link to="/" className="btn btn-ghost normal-case text-2xl lg:text-4xl font-extrabold">
						Wakil
					</Link>
				</div>
				<div className="navbar-center hidden lg:block">
					<ul className="flex flex-row menu  mt-3 p-2 gap-2 rounded-box">{navLists}</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
