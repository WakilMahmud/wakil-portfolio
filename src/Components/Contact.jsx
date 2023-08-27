import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
import { FaFacebook, FaLinkedin, FaSquareWhatsapp, FaTelegram } from "react-icons/fa6";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_irscp9q", "template_q934xy7", form.current, "J2w6EZGhwo3WceCBD").then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div id="contact" className="my-32">
			<h1 className="font-bold text-2xl lg:text-5xl text-center w-1/2 m-auto lg:mb-20">CONTACT</h1>
			<div className="flex flex-col lg:flex-row justify-between px-4 lg:px-0">
				<div className="w-full lg:w-1/2 mb-20 lg:mb-0">
					<form ref={form} onSubmit={sendEmail}>
						<div>
							<label htmlFor="name" className="block text-gray-700 font-bold mb-2">
								Name:
							</label>
							<input
								type="text"
								id="name"
								name="user_name"
								placeholder="Your Name"
								className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block text-gray-700 font-bold mb-2">
								Email:
							</label>
							<input
								type="email"
								id="email"
								name="user_email"
								placeholder="Your Email"
								className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="block text-gray-700 font-bold mb-2">
								Message:
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								placeholder="Your Message"
								className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
								required
							></textarea>
						</div>
						<div className="text-center">
							<button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-4">
					<div className="">
						<h1>
							<span className="text-sky-500">Connect </span>with me
						</h1>
					</div>
					<div className="flex items-center gap-2">
						<HiOutlineLocationMarker></HiOutlineLocationMarker>Hazaribag, Dhaka, Bangladesh
					</div>
					<div className="flex items-center gap-2">
						<HiPhone></HiPhone> +880 17250 48190, +880 17010 64692
					</div>
					<div className="flex gap-4">
						<Link to="https://www.facebook.com/wakil.mahmud.5">
							<FaFacebook></FaFacebook>
						</Link>
						<Link to="https://www.linkedin.com/in/wakil-mahmud-971a7924a/">
							<FaLinkedin></FaLinkedin>
						</Link>
						<Link to="https://wa.me/1725048190">
							<FaSquareWhatsapp></FaSquareWhatsapp>
						</Link>
						<Link to="https://t.me/Wakil_Mahmud">
							<FaTelegram></FaTelegram>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
