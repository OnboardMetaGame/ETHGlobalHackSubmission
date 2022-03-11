import Banner from "../assets/onboard.png";
import StartBtn from "../assets/start-btn.png";
import WebBtn from "../assets/website-btn.png";
import GuideBtn from "../assets/guide-btn.png";
import Settings from "../assets/setting.png";

import { Link } from "react-router-dom";

import "../styles/opening.scss";

const OpeningWindow = ({ soundIcon, handleSoundChange }) => {
	return (
		<main className="view">
			<div className="options">
				<img src={Settings} alt="settings" />
				<img onClick={handleSoundChange} src={soundIcon} alt="sound" />
			</div>
			<div className="banner">
				<img src={Banner} alt="Onboard" />
			</div>

			<div className="btns">
				<Link to="/">
					<img src={WebBtn} alt="website" />
				</Link>
				<Link to="/game">
					<img className="start" src={StartBtn} alt="start" />
				</Link>
				<Link to="/">
					<img src={GuideBtn} alt="guide" />
				</Link>
			</div>
		</main>
	);
};

export default OpeningWindow;
