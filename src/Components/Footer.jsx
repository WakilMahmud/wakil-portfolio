import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../assets/react.svg";

const Footer = () => {
	return (
		<footer className="pt-6 pb-20 border-t">
			<div className="container mx-auto flex flex-col lg:flex-row justify-evenly ">
				<div className="logo flex items-center lg:gap-4  justify-center">
					<Link to="/">
						<img className="h-12 w-12 rounded-full" src={logo} alt="Logo" />
					</Link>
					<h2 className="text-xl font-bold">Wakil</h2>
				</div>
				<div className="contact-info  space-y-2 lg:mt-16 text-center">
					<p>Email: wakilmahmud30@gmail.com</p>
					<p>Phone: +880 1725048190</p>
					<p>Address: Hazaribag, Dhaka, Bangladesh</p>
				</div>

				<div className="social-media flex items-center justify-center my-8 lg:mt-0">
					<span className="footer-title mb-0 ">Social</span>
					<Link to="https://www.facebook.com/wakil.mahmud.5" className=" hover:text-blue-500 mx-2">
						<FaFacebook></FaFacebook>
					</Link>
					<Link to="https://www.instagram.com" className=" hover:text-purple-500 mx-2">
						<FaTwitter></FaTwitter>
					</Link>
				</div>
			</div>
			<div className="mb-4 lg:mt-8 flex justify-center">
				<p className="text-sm lg:text-base">
					Copywright &copy; {new Date().getFullYear()} - All rights reserved by <span className="text-sky-500">Wakil</span>.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
