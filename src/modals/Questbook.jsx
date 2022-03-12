import { useState, useContext } from "react";

import Badge from "../assets/badge_ph.png";
import NextBtn from "../assets/next.png";
import BackBtn from "../assets/back.png";
import ExitBtn from "../assets/exit.png";
import { ModalContext } from "../context/ModalContext";

import "../styles/questbook.scss";

const tempBadges = [
	{
		id: 0,
		name: "First Time",
		image: Badge,
		discription: "You have completed the first quest",
	},
	{
		id: 1,
		name: "Second Time",
		image: Badge,
		discription: "You have completed the second quest",
	},
	{
		id: 2,
		name: "Third Time",
		image: Badge,
		discription: "You have completed the third quest",
	},
];

const Questbook = () => {
	const { setIsQuestBook } = useContext(ModalContext);
	const [page, setPage] = useState(1);
	const [badges, setBadges] = useState(tempBadges);

	const lastBagdeIndex = page * 4;
	const firstBagdeIndex = lastBagdeIndex - 4;
	const curentBadges = badges.slice(firstBagdeIndex, lastBagdeIndex);

	return (
		<div className="questbook-bg">
			<div className="questbook">
				<div className="badges">
					{curentBadges.map(({ id, name, image, discription }) => {
						return (
							<div className="badge" key={id}>
								<img src={image} alt={name} />
								<div className="name">{name}</div>
								<div className="discription">{discription}</div>
							</div>
						);
					})}
				</div>
				<img
					className={"exit"}
					onClick={() => setIsQuestBook(false)}
					src={ExitBtn}
					alt="close"
				/>
				<div className="btns">
					<img
						onClick={() => setPage(page > 1 ? page - 1 : page)}
						style={{ cursor: page > 1 ? "pointer" : "not-allowed" }}
						src={BackBtn}
						alt="back"
					/>
					<img
						onClick={() =>
							setPage(badges / 4 >= page && page !== 4 ? page + 1 : page)
						}
						style={{
							cursor:
								badges / 4 >= page && page !== 4 ? "pointer" : "not-allowed",
						}}
						src={NextBtn}
						alt="next"
					/>
				</div>
			</div>
		</div>
	);
};

export default Questbook;
