import { ModalContext } from "../context/ModalContext";

import React, { useContext, useState } from "react";

import ExitBtn from "../assets/exit.png";
import NextBtn from "../assets/next.png";
import PrevBtn from "../assets/back.png";
import StartQuiz from "../assets/start-quiz.png";

import "../styles/path.scss";

const Path = ({ info }) => {
	const { setIsPathOpen, setIsQuizOpen } = useContext(ModalContext);
	const [page, setPage] = useState(0);

	return (
		<div className="path-bg">
			<div className="path-content">
				<img
					onClick={() => setIsPathOpen(false)}
					className="exit"
					src={ExitBtn}
					alt="exit"
				/>
				<div className="path-info">
					<div className="path-title">{info[page].title}</div>
					<div className="path-description">{info[page].description}</div>
					<div className="readmore">
						{info[page].links.map((link, id) => (
							<a key={id} href={link} target="_blank" rel="noreferrer">
								Read More
							</a>
						))}
					</div>
				</div>
				<div className="btns">
					<img
						onClick={() => setPage(page > 0 ? page - 1 : page)}
						style={{ cursor: page > 0 ? "pointer" : "not-allowed" }}
						src={PrevBtn}
						alt="prev"
						className="prev"
					/>
					{page === info.length - 1 && (
						<img
							onClick={() => {
								setIsQuizOpen(true);
								setIsPathOpen(false);
							}}
							className="start-quiz"
							src={StartQuiz}
							alt="start"
						/>
					)}
					<img
						onClick={() => setPage(page < info.length - 1 ? page + 1 : page)}
						style={{ cursor: page < info.length ? "pointer" : "not-allowed" }}
						src={NextBtn}
						alt="next"
						className="next"
					/>
				</div>
			</div>
		</div>
	);
};

export default Path;
