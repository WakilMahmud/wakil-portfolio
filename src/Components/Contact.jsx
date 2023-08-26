// import { useState } from "react";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
// 	const [formData, setFormData] = useState({
// 		name: "",
// 		email: "",
// 		message: "",
// 	});

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({ ...formData, [name]: value });
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		// Handle form submission here, e.g., send data to a server or display it
// 		console.log("Form data submitted:", formData);

// 		emailjs.sendForm("service_irscp9q", "template_q934xy7", formData, "J2w6EZGhwo3WceCBD").then(
// 			(result) => {
// 				console.log(result.text);
// 			},
// 			(error) => {
// 				console.log(error.text);
// 			}
// 		);

// 		e.target.name = "";
// 		e.target.email = "";
// 		e.target.message = "";
// 	};

// 	return (
// 		<div id="contact" className="my-32">
// 			<h1 className="font-bold text-2xl lg:text-5xl text-center w-1/2 m-auto lg:mb-20">CONTACT</h1>
// 			<div className="flex justify-between">
// 				<div className="w-1/2">
// 					<form onSubmit={handleSubmit}>
// 						<div className="mb-4">
// 							<label htmlFor="name" className="block text-gray-700 font-bold mb-2">
// 								Name:
// 							</label>
// 							<input
// 								type="text"
// 								id="name"
// 								name="name"
// 								value={formData.name}
// 								onChange={handleChange}
// 								placeholder="Your Name"
// 								className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
// 								required
// 							/>
// 						</div>
// 						<div className="mb-4">
// 							<label htmlFor="email" className="block text-gray-700 font-bold mb-2">
// 								Email:
// 							</label>
// 							<input
// 								type="email"
// 								id="email"
// 								name="email"
// 								value={formData.email}
// 								onChange={handleChange}
// 								placeholder="Your Email"
// 								className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
// 								required
// 							/>
// 						</div>
// 						<div className="mb-4">
// 							<label htmlFor="message" className="block text-gray-700 font-bold mb-2">
// 								Message:
// 							</label>
// 							<textarea
// 								id="message"
// 								name="message"
// 								value={formData.message}
// 								onChange={handleChange}
// 								rows="4"
// 								placeholder="Your Message"
// 								className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
// 								required
// 							></textarea>
// 						</div>
// 						<div className="text-center">
// 							<button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
// 								Submit
// 							</button>
// 						</div>
// 					</form>
// 				</div>
// 				<div className="w-1/2">
// 					<h2 className="text-center m-0 p-0 pt-5 text-3">
// 						<span className="color-4">Connect</span> with me
// 					</h2>
// 					<address className=" m-0 ms-2 mt-4 py-2 text-center address">
// 						<HiOutlineLocationMarker className="me-3">S.T Bhaban, Konapara, Jatrabari, Dhaka-1362</HiOutlineLocationMarker>
// 					</address>
// 					{/* <p className="color-5 m-0 ms-2 mb-5 text-center phone">
// 						<FontAwesomeIcon icon={faPhoneAlt} className="me-3" />
// 						+880 19100 70303 , +880 18693 37724
// 					</p> */}

// 					<div className="d-flex justify-content-center align-items-center">
// 						{/* <a
// 							href="https://facebook.com/asadujjaman.mridul"
// 							target="_blank"
// 							rel="noreferrer"
// 							data-bs-toggle="tooltip"
// 							data-bs-placement="bottom"
// 							title="Facebook"
// 						>
// 							<FontAwesomeIcon icon={faFacebookSquare} className="social my-3 me-3" />
// 						</a> */}
// 						{/* <a
// 							href="https://instagram.com/asadujjaman.mridul"
// 							target="_blank"
// 							rel="noreferrer"
// 							data-bs-toggle="tooltip"
// 							data-bs-placement="bottom"
// 							title="Instagram"
// 						>
// 							<FontAwesomeIcon icon={faInstagramSquare} className="social my-3 me-3" />
// 						</a>
// 						<a
// 							href="https://www.behance.net/asadujjmridul"
// 							target="_blank"
// 							rel="noreferrer"
// 							data-bs-toggle="tooltip"
// 							data-bs-placement="bottom"
// 							title="Twitter"
// 						>
// 							<FontAwesomeIcon icon={faBehanceSquare} className="social my-3 me-3" />
// 						</a>
// 						<a
// 							href="https://discordapp.com/users/551396889983975436"
// 							target="_blank"
// 							rel="noreferrer"
// 							data-bs-toggle="tooltip"
// 							data-bs-placement="bottom"
// 							title="Discord"
// 						>
// 							<FontAwesomeIcon icon={faDiscord} className="social my-3" />
// 						</a> */}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" name="user_name" />
			<label>Email</label>
			<input type="email" name="user_email" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" />
		</form>
	);
};
export default Contact;
