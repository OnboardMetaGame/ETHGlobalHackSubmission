import IntroModal from "../components/IntroModal";

import { useMoralis, useMoralisQuery } from "react-moralis";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/game.scss";

import { SoundContext } from "../context/SoundContext";
import { ViewContext } from "../context/ViewContext";
import { ModalContext } from "../context/ModalContext";

import Home from "./Home";
import Academy from "./Academy";
import Pool from "./Pool";
import Bank from "./Bank";
import Farm from "./Farm";
import Wizard from "./Wizard";
import Questbook from "../modals/Questbook";
import Book from "../assets/questbook.png";
import NewBadge from "../modals/NewBadge";
import Options from "../modals/Options";

const Game = () => {
	const { view, setView } = useContext(ViewContext);
	const {
		isQuestBook,
		setIsQuestBook,
		setIsNewBadge,
		isNewBadge,
		isOptionsOpen,
		setIsOptionsOpen,
	} = useContext(ModalContext);
	const { soundIcon, handleSoundChange } = useContext(SoundContext);
	const navigate = useNavigate();
	const { user, logout } = useMoralis();

	// const {
	// 	fetch: getUsers,
	// 	data: [UserFromDB],
	// 	error: usersError,
	// 	isLoading: usersLoading,
	// } = useMoralisQuery(
	// 	"User",
	// 	(query) => query.equalTo("ethAddress", user.get("ethAddress")),
	// 	[user],
	// 	{
	// 		autoFetch: false,
	// 		live: false,
	// 	},
	// );

	// console.log("user", UserFromDB);

	const [isIntroModalOpen, setIsIntroModalOpen] = useState(user === null);

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
				alt="sound"
			/>
			<img
				className="book"
				src={Book}
				onClick={() => setIsQuestBook(!isQuestBook)}
				alt="book"
			/>
			<div className="user" onClick={() => setIsOptionsOpen(true)}>
				<span>{user ? addressHandler(user.get("ethAddress")) : "0x00"}</span>
			</div>
			{/* <button onClick={handleLogout}>Logout</button>
			<button onClick={() => setIsNewBadge(true)}>NewBadge</button>
			<button onClick={() => setView("home")}>Home</button> */}

			{isQuestBook && <Questbook />}
			{isNewBadge && <NewBadge />}
			{isOptionsOpen && <Options />}

			{view === "home" && <Home />}
			{view === "farm" && <Farm />}
			{view === "bank" && <Bank />}
			{view === "pool" && <Pool />}
			{view === "academy" && <Academy />}
			{view === "wizard" && <Wizard />}
		</main>
	);
};

export default Game;
