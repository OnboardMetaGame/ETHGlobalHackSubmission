import React, { useContext } from "react";
import HeroBanner from "../components/HeroBanner";
import { ViewContext } from "../context/ViewContext";
import BackBtn from "../assets/back.png";

import "../styles/wizard.scss";

const Homepage = () => {
	const { setView } = useContext(ViewContext);
	return (
		<div className="wizard-tab">
			<img
				className="to-home"
				onClick={() => setView("home")}
				src={BackBtn}
				alt="back"
			/>
			<HeroBanner />
		</div>
	);
};

export default Homepage;
