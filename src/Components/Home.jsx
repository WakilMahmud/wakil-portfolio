import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
	return (
		<div className="space-y-4">
			<Header></Header>
			<About></About>
			<Skills></Skills>
			<Projects></Projects>
			<Contact></Contact>
		</div>
	);
};

export default Home;
