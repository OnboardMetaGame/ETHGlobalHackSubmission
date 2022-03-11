import IntroModal from "../components/IntroModal";

import { useMoralis } from "react-moralis";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/game.scss";

const Game = () => {
	const navigate = useNavigate();
	const { authenticate, isAuthenticated, isAuthenticating, user, logout } =
		useMoralis();

	const [isIntroModalOpen, setIsIntroModalOpen] = useState(user === null);

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	const addressHandler = (address) => {
		return `${address.slice(0, 5)}...${address.slice(-5)}`;
	};

	return (
		<main className="bg">
			{isIntroModalOpen && !user && (
				<IntroModal setIsModalOpen={setIsIntroModalOpen} />
			)}
			<div className="user">
				<span>{user ? addressHandler(user.get("ethAddress")) : "0x00"}</span>
			</div>
			<button onClick={handleLogout}>Logout</button>
		</main>
	);
};

export default Game;
