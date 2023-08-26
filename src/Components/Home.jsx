import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<Header></Header>
			<About></About>
			<Skills></Skills>
			<Projects></Projects>
			<Contact></Contact>
		</>
	);
};

export default Home;
