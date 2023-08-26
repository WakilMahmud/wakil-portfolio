import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/Tailwind.png";
import JavaScript from "../assets/JavaScript.png";
import React from "../assets/React.png";
import Node from "../assets/Nodejs.png";
import Express from "../assets/Express.png";
import Mongodb from "../assets/Mongodb.png";
import Firebase from "../assets/Firebase.jpg";
import Redux from "../assets/Redux.png";
import Github from "../assets/Github.jpg";

const Skills = () => {
	const cards = [
		{ id: 1, name: "HTML", imageUrl: HTML },
		{ id: 2, name: "CSS", imageUrl: CSS },
		{ id: 3, name: "Bootstrap", imageUrl: Bootstrap },
		{ id: 4, name: "Tailwind CSS", imageUrl: Tailwind },
		{ id: 5, name: "JavaScript", imageUrl: JavaScript },
		{ id: 6, name: "React", imageUrl: React },
		{ id: 7, name: "Node Js", imageUrl: Node },
		{ id: 8, name: "Express Js", imageUrl: Express },
		{ id: 9, name: "MongoDB", imageUrl: Mongodb },
		{ id: 10, name: "Firebase", imageUrl: Firebase },
		{ id: 11, name: "Redux", imageUrl: Redux },
		{ id: 12, name: "Github", imageUrl: Github },
	];

	return (
		<div id="skills" className="">
			<h1 className="font-bold text-2xl lg:text-5xl text-center w-1/2 m-auto lg:mb-20">SKILLS</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-4 p-4 lg:p-0">
				{cards.map((card) => (
					<div key={card.id} className="bg-transparent rounded-lg shadow-md p-4">
						<img src={card.imageUrl} alt={card.name} className="w-full h-40 mx-auto rounded-lg" />
						<p className="text-center mt-2">{card.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
