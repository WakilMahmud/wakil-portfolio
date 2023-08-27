import ToyCar from "../assets/ToyCar World.png";
import American_Cuisine from "../assets/American Cuisine.png";
import Multilingual_Mastery from "../assets/Multilingual Mastery.png";

import Project from "./Project";

const Projects = () => {
	const cards = [
		{
			id: 1,
			name: "ToyCars World",
			imageUrl: ToyCar,
			liveLink: "https://toy-marketplace-project.web.app/",
			clientLink: "https://github.com/WakilMahmud/ToyCars-World-Client",
			serverLink: "https://github.com/WakilMahmud/ToyCars-World-Server",
			description:
				"This is a full-stack project for an online toy car shop. Users can add their own toy cars for sale and view a list of their listed toys, along with detailed information about each toy.",
			features: ["User can register and login", "Logged in user can read, update or delete toys", "Used Firebase Auth for authenticating user"],
		},

		{
			id: 2,
			name: "American Cuisine",
			imageUrl: American_Cuisine,
			liveLink: "https://chef-46d95.web.app/",
			clientLink: "https://github.com/WakilMahmud/American-Cuisine",
			serverLink: "https://github.com/WakilMahmud/American-Cuisine-Server",
			description:
				"This is a MERN website featuring various chefs who showcase their own recipes. Valid users can view and like their favourite recipes.",
			features: [
				"Authenticated users can see detailed recipes of any chef",
				"Download the blog page by clicking the Generate pdf Button",
				"Email/Password, Google and GitHub login are integrated",
			],
		},

		{
			id: 3,
			name: "Multilingual Mastery",
			imageUrl: Multilingual_Mastery,
			liveLink: "https://multilingual-mastery-client.web.app/",
			clientLink: "https://github.com/WakilMahmud/multilingual-mastery-client",
			serverLink: "https://github.com/WakilMahmud/multilingual-mastery-server",
			description:
				"This full-stack language learning platform enables course enrollment, class uploads by instructors, and admin control over class approval and user roles.",
			features: [
				"Dynamic Dashboard (Student, Admin, Instructor)",
				"Admin manages users, classes. Instructor post classes. Students can enroll.",
				"Toggling the theme (Dark/Light)",
			],
		},
	];

	return (
		<div id="projects" className="my-32">
			<h1 className="font-bold text-2xl lg:text-5xl text-center w-1/2 m-auto mb-10 lg:mb-20 text-yellow-300">PROJECTS</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1 lg:p-0">
				{cards.map((card) => (
					<Project key={card.id} card={card}></Project>
				))}
			</div>
		</div>
	);
};

export default Projects;
