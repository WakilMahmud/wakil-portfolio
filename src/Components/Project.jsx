import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiExternalLink, HiOutlineServer } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { BiDetail } from "react-icons/bi";

const Project = ({ card }) => {
	const [isOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className="bg-gray-800 rounded-lg shadow-md p-4">
			<div className="w-full h-96 overflow-hidden hover:overflow-y-scroll rounded">
				<img src={card.imageUrl} alt={card.name} className="w-full object-cover" />
			</div>
			<h3 className="text-center my-8 text-lg font-semibold">{card.name}</h3>
			<div className="flex justify-center mt-4 space-x-4">
				<Link to={card.liveLink} className="flex items-center gap-1 border border-sky-500 rounded-full p-2">
					<HiExternalLink></HiExternalLink> Live
				</Link>
				<Link to={card.clientLink} className="flex items-center gap-1 border border-sky-500 rounded-full p-2">
					<FaGithub></FaGithub> Client
				</Link>
				<Link to={card.serverLink} className="flex items-center gap-1 border border-sky-500 rounded-full p-2">
					<HiOutlineServer></HiOutlineServer> Server
				</Link>

				<button type="button" onClick={openModal} className="flex items-center gap-1 border border-sky-500 rounded-full p-2">
					<BiDetail></BiDetail> Details
				</button>
				{/* Modal Start*/}
				<Transition appear show={isOpen} as={Fragment}>
					<Dialog as="div" className="relative z-10" onClose={closeModal}>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black bg-opacity-25" />
						</Transition.Child>

						<div className="fixed inset-0 overflow-y-auto">
							<div className="flex min-h-full items-center justify-center p-4 text-center">
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="ease-in duration-200"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
										<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
											{card?.name}
										</Dialog.Title>
										<div className="mt-2">
											<p className="text-sm text-gray-500">{card?.description}</p>
										</div>
										<div className="mt-4">
											<p className="text-lg text-sky-500">Features</p>
											{card?.features.map((feature, index) => (
												<li key={index} className="text-black text-sm">
													{feature}
												</li>
											))}
										</div>
										<div className="mt-4">
											<button
												type="button"
												className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
												onClick={closeModal}
											>
												Back
											</button>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</Dialog>
				</Transition>
				{/* Modal End */}
			</div>
		</div>
	);
};

export default Project;
