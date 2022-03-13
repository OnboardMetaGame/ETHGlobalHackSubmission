import Badge from "../assets/firstBadge_ph.png";
import ExitBtn from "../assets/exit.png";
import AddToBookBtn from "../assets/add-to-book.png";
import { ModalContext } from "../context/ModalContext";

import { useContext } from "react";

import "../styles/new-badge.scss";

const NewBadge = ({ badge, title, description }) => {
	const { setIsNewBadge, setIsQuestBook } = useContext(ModalContext);

	const AddBadgeToBook = () => {
		setIsNewBadge(false);
		setIsQuestBook(true);
	};

	return (
		<div className="new-badge-bg">
			<div className="new-badge">
				<div className="message">🥳 Hurray!! 🥳</div>
				<div className="badge">
					<img src={Badge} alt="badge" />
					<div className="name">Onboard</div>
					<div className="discription">
						You have completed the Blockchain Fundamentals
					</div>
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
