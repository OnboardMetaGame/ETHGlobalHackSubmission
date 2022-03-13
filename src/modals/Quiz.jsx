import { ModalContext } from "../context/ModalContext";

import React, { useContext, useState } from "react";

import ExitBtn from "../assets/exit.png";
import "../styles/quiz.scss";

const Quiz = ({ quiz }) => {
	const { setIsQuizOpen, setIsNewBadge } = useContext(ModalContext);
	const [page, setPage] = useState(0);
	const [feedback, setFeedback] = useState("");
	const [val, setVal] = useState("");

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	const handleCorrect = async () => {
		setFeedback("Correct!");
		await sleep(300);
		if (page < quiz.length - 1) {
			setFeedback("");
			setVal("");
			setPage(page + 1);
		} else {
			setIsQuizOpen(false);
			setIsNewBadge(true);
		}
	};

	return (
		<div className="quiz-bg">
			<div className="quiz-content">
				<div className="question">{quiz[page].question}</div>
				<div className="options">
					{quiz[page].options.map((option, index) => (
						<div className="option">
							<input
								key={index}
								type="radio"
								name={`q${page}`}
								className={`q${page}`}
								value={val}
								id={`q${page}${index}`}
								onChange={(e) => {
									setVal(e.target.value);
									if (option === quiz[page].answer) {
										handleCorrect();
									} else {
										setFeedback("Incorrect!");
									}
								}}
							/>
							<label htmlFor={`q${page}${index}`}>{option}</label>
						</div>
					))}
				</div>
				{feedback && (
					<div
						className={`feedback ${
							feedback === "Correct!" ? "success" : "danger"
						}`}>
						{feedback}
					</div>
				)}

				<img
					onClick={() => setIsQuizOpen(false)}
					className="exit"
					src={ExitBtn}
					alt="exit"
				/>
			</div>
		</div>
	);
};

export default Quiz;
