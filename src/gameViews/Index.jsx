import IntroModal from "../components/IntroModal";

import { useMoralis } from "react-moralis";
import { useState } from "react";

import "../styles/game.scss";

const Game = () => {
	const { authenticate, isAuthenticated, isAuthenticating, user } =
		useMoralis();

	const [isModalOpen, setIsModalOpen] = useState(user === null);

	return (
		<main className="bg">
			{isModalOpen ? (
				<IntroModal setIsModalOpen={setIsModalOpen} />
			) : (
				<div className="user">{user?.get("ethAddress")}</div>
			)}
		</main>
	);
};

export default Game;
