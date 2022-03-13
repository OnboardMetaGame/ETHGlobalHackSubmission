import { ViewContext } from "../context/ViewContext";
import BackBtn from "../assets/back.png";
import { useContext } from "react";

import "../styles/farm.scss";

const Farm = () => {
	const { setView } = useContext(ViewContext);
	return (
		<div className="farm-tab">
			<img
				className="to-home"
				onClick={() => setView("home")}
				src={BackBtn}
				alt="back"
			/>
		</div>
	);
};

export default Farm;
