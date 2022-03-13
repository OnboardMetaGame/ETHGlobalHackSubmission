import "../styles/pool.scss";

import { ViewContext } from "../context/ViewContext";
import BackBtn from "../assets/back.png";
import { useContext } from "react";

const Pool = () => {
	const { setView } = useContext(ViewContext);
	return (
		<div className="pool-tab">
			<img
				className="to-home"
				onClick={() => setView("home")}
				src={BackBtn}
				alt="back"
			/>
		</div>
	);
};

export default Pool;
