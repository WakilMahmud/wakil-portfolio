import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { FaFacebook, FaLinkedin, FaSquareWhatsapp, FaTelegram } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="pt-6 pb-20 border-t">
			<div className="container mx-auto flex flex-col lg:flex-row justify-evenly ">
				<div className="logo flex items-center lg:gap-4  justify-center">
					<Link to="/">
						<img className="h-12 w-12 rounded-full" src={logo} alt="Logo" />
					</Link>
					<h2 className="text-xl font-bold text-sky-500">Wakil</h2>
				</div>
				<div className="contact-info  space-y-2 lg:mt-16 text-center">
					<p>Email: wakilmahmud30@gmail.com</p>
					<p>Phone: +880 1725048190</p>
					<p>Address: Hazaribag, Dhaka, Bangladesh</p>
				</div>

				<div className="social-media flex items-center justify-center my-8 lg:mt-0">
					<span className="footer-title mb-0 ">Social</span>
					<Link to="https://www.facebook.com/wakil.mahmud.5" className=" hover:text-sky-500 mx-2">
						<FaFacebook></FaFacebook>
					</Link>

					<Link to="https://www.linkedin.com/in/wakil-mahmud-971a7924a/" className=" hover:text-sky-500 mx-2">
						<FaLinkedin></FaLinkedin>
					</Link>
					<Link to="https://wa.me/1725048190" className=" hover:text-sky-500 mx-2">
						<FaSquareWhatsapp></FaSquareWhatsapp>
					</Link>
					<Link to="https://t.me/Wakil_Mahmud" className=" hover:text-sky-500 mx-2">
						<FaTelegram></FaTelegram>
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
