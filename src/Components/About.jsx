import Profile from "../assets/Profile.png";

const About = () => {
	const handleResumeDownload = () => {
		// Create a link element
		const link = document.createElement("a");

		// Set the link's href to the modified Google Drive link
		link.href = "https://drive.google.com/uc?export=download&id=1dU3FBquw2PbIcsg6xPVfGMtMSY81Qhof";

		// Set the 'download' attribute to specify the download filename
		link.setAttribute("download", "Wakil_resume.pdf");

		// Trigger a click event on the link to start the download
		link.click();
	};

	return (
		<div id="about" className="my-32">
			<h1 className="font-bold text-2xl lg:text-5xl text-center w-1/2 m-auto lg:mb-20">ABOUT ME</h1>
			<div className="flex flex-col lg:flex-row justify-between text-justify">
				<div className="w-full lg:w-1/2 space-y-4 ">
					<p className="flex justify-center items-center p-4">
						My name is Wakil Mahmud. <br /> <br /> Rajshahi University of Engineering and Technology is where I am currently studying. I&apos;m about
						to wrap up my Bachelor of Science in Computer Science and Engineering. <br /> <br />
						As a full stack developer, I&apos;ve worked on numerous projects where I created responsive and user-friendly interfaces using HTML, CSS,
						JavaScript, and other technologies. I&apos;m also familiar with popular front-end frameworks like React. I recently finished a Full Stack
						Web Development course on Programing Hero, where I learned about front-end and back-end technologies. I learnt how to create dynamic
						websites, work with databases such as MongoDB, and manage server-side programming with Node.js, Express.js.
					</p>
					<div className="text-center">
						<button className="btn btn-info" onClick={handleResumeDownload}>
							DOWNLOAD RESUME
						</button>
					</div>
				</div>
				<div className="w-full lg:w-2/5 flex justify-center">
					<img className="h-96 w-4/5 object-contain lg:rounded-full" src={Profile} alt="Profile Image" />
				</div>
			</div>
		</div>
	);
};

export default About;
