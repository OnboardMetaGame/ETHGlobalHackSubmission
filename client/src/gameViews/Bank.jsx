import { ViewContext } from "../context/ViewContext";
import BackBtn from "../assets/back.png";
import { useContext } from "react";

import "../styles/bank.scss";

const Bank = () => {
	const { setView } = useContext(ViewContext);
	return (
		<div className="bank-tab">
			<img
				className="to-home"
				onClick={() => setView("home")}
				src={BackBtn}
				alt="back"
			/>
		</div>
	);
};

export default Bank;
