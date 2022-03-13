import Book from "../assets/book.png";
import ExitBtn from "../assets/exit.png";
import { ModalContext } from "../context/ModalContext";

import { useContext } from "react";

import "../styles/new-badge.scss";

const NewBadge = () => {
	const { setIsNewQuestbook } = useContext(ModalContext);

	return (
		<div className="new-badge-bg">
			<div className="new-badge">
				<div className="message">🥳 Hurray!! 🥳</div>
				<div className="badge">
					<img src={Book} alt="book" />
					<div className="name">Questbook</div>
					<div className="discription">
						Congratularions, You have unlocked the questbook. Now get your first
						badge at the Academy.
					</div>
				</div>
				<img
					className="exit"
					onClick={() => setIsNewQuestbook(false)}
					src={ExitBtn}
					alt="close"
				/>
			</div>
		</div>
	);
};

export default NewBadge;
