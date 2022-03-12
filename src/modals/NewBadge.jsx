import Badge from "../assets/badge_ph.png";
import ExitBtn from "../assets/exit.png";
import AddToBookBtn from "../assets/add-to-book.png";
import { ModalContext } from "../context/ModalContext";

import { useContext } from "react";

import "../styles/new-badge.scss";

const NewBadge = () => {
	const { setIsNewBadge } = useContext(ModalContext);

	const AddBadgeToBook = () => {};

	return (
		<div className="new-badge-bg">
			<div className="new-badge">
				<div className="message">🥳 Hurray!! 🥳</div>
				<div className="badge">
					<img src={Badge} alt="badge" />
					<div className="name">First Time</div>
					<div className="discription">You have completed the first quest</div>
				</div>
				<img
					className="exit"
					onClick={() => setIsNewBadge(false)}
					src={ExitBtn}
					alt="close"
				/>
				<img
					className="add-to-book"
					onClick={AddBadgeToBook}
					src={AddToBookBtn}
					alt="to-book"
				/>
			</div>
		</div>
	);
};

export default NewBadge;
