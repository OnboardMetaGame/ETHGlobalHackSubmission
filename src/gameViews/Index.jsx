import IntroModal from "../components/IntroModal";

import { useMoralis } from "react-moralis";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/game.scss";

import { SoundContext } from "../context/SoundContext";
import { ViewContext } from "../context/ViewContext";

import Home from "./Home";
import Academy from "./Academy";
import Pool from "./Pool";
import Bank from "./Bank";
import Farm from "./Farm";

const Game = () => {
	const { view, setView } = useContext(ViewContext);
	const { soundIcon, handleSoundChange } = useContext(SoundContext);
	const navigate = useNavigate();
	const { user, logout } = useMoralis();

	const [isIntroModalOpen, setIsIntroModalOpen] = useState(user === null);

	const handleLogout = () => {
		logout();
		navigate("/");
		setView("home");
	};

	const addressHandler = (address) => {
		return `${address.slice(0, 5)}...${address.slice(-5)}`;
	};

	return (
		<main className="bg">
			{isIntroModalOpen && !user && (
				<IntroModal setIsModalOpen={setIsIntroModalOpen} />
			)}
			<img
				className="sound"
				src={soundIcon}
				onClick={handleSoundChange}
				alt=""
			/>
			<div className="user">
				<span>{user ? addressHandler(user.get("ethAddress")) : "0x00"}</span>
			</div>
			<button onClick={handleLogout}>Logout</button>
			<button onClick={() => setView("home")}>Home</button>

			{view === "home" && <Home />}
			{view === "farm" && <Farm />}
			{view === "bank" && <Bank />}
			{view === "pool" && <Pool />}
			{view === "academy" && <Academy />}
		</main>
	);
};

export default Game;
