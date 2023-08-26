import Lottie from "lottie-react";
import Programming from "../assets/programming.json";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-between text-center my-8">
			<div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
				<div className="flex">
					<h2 className="font-semibold">Hello everyone!</h2>
					<img
						style={{ height: "25px", mixBlendMode: "difference" }}
						src="https://emojis.slackmojis.com/emojis/images/1565879801/6181/waving_hand_animated.gif?1565879801"
						alt="Hand animation"
					/>
				</div>
				<div>
					<p className="">
						This is <span className="font-bold text-4xl sky-500">WAKIL MAHMUD</span>
					</p>
					<TypeAnimation
						sequence={[
							// Same substring at the start will only be typed out once, initially
							"FULL STACK DEVELOPER",
							2000, // wait 1s before replacing "Mice" with "Hamsters"
							"FRONTEND DEVELOPER",
							2000,
							"BACKEND DEVELOPER",
							2000,
						]}
						wrapper="span"
						speed={50}
						style={{ fontSize: "1.5em", display: "inline-block", color: "#05D0EB" }}
						repeat={Infinity}
					/>
				</div>
			</div>
			<div className="w-full lg:w-1/2">
				<Lottie animationData={Programming} loop={true} />
			</div>
		</div>
	);
};

export default Header;
