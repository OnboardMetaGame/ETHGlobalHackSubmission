import { ModalContext } from "../context/ModalContext";
import { UserContext } from "../context/UserContext";

import React, { useContext, useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { NftAbi, NftAddress } from "../contracts/Nfts";

import ExitBtn from "../assets/exit.png";
import "../styles/quiz.scss";

const Quiz = ({ quiz }) => {
	const { setIsQuizOpen, setIsNewBadge } = useContext(ModalContext);
	const { counts, setCounts } = useContext(UserContext);
	const { badge, quiz: quizCount } = counts;
	const [page, setPage] = useState(0);
	const [feedback, setFeedback] = useState("");
	const [val, setVal] = useState("");
	const { user } = useMoralis();

	const {
		error: badgeMintError,
		fetch: mintBadge,
		isFetching: mintingBadge,
	} = useWeb3ExecuteFunction({
		abi: NftAbi,
		contractAddress: NftAddress,
		functionName: "badgeMint",
		params: {
			account: user?.get("ethAddress"),
			id: 1,
			amount: 1,
		},
	});

	const {
		error: championMintError,
		fetch: mintChampion,
		isFetching: mintingChampion,
	} = useWeb3ExecuteFunction({
		abi: NftAbi,
		contractAddress: NftAddress,
		functionName: "championMint",
		params: {
			account: user?.get("ethAddress"),
			id: 2,
			amount: 1,
		},
	});

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	const handleCorrect = async () => {
		setFeedback("Correct!");
		await sleep(300);
		if (page < quiz.length - 1) {
			setFeedback("");
			setPage(page + 1);
		} else {
			setIsQuizOpen(false);
			await mintBadge();
			await mintChampion();
			setCounts({ ...counts, badge: badge + 1, quiz: quizCount + 1 });
			setIsNewBadge(true);
		}
	};

	return (
		<div className="quiz-bg">
			<div className="quiz-content">
				<div className="question">{quiz[page].question}</div>
				<div className="options">
					{quiz[page].options.map((option, index) => (
						<div className="option" key={index}>
							<input
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
