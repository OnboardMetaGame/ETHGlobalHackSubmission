import { ModalContext } from "../context/ModalContext";

import React, { useContext, useState } from "react";
import { useMoralis } from "react-moralis";
import { NftAbi, NftAddress } from "../contracts/Nfts";

// import Web3 from "web3";

import ExitBtn from "../assets/exit.png";
import "../styles/quiz.scss";

const Quiz = ({ quiz }) => {
	const { setIsQuizOpen, setIsNewBadge } = useContext(ModalContext);
	const [page, setPage] = useState(0);
	const [feedback, setFeedback] = useState("");
	const [val, setVal] = useState("");
	const { user } = useMoralis();

	// const web3 = new Web3(window.ethereum);
	// const contract = new web3.eth.Contract(NftAbi, NftAddress);

	// const mintBadge = await contract.methods.badgeMint().call({
	// 	account: user.get("ethAddress"),
	// 	id: 1,
	// 	amount: 1,
	// });

	// const mintChampion = await contract.methods.championMint().call({
	// 	account: user.get("ethAddress"),
	// 	id: 2,
	// 	amount: 1,
	// });

	// console.log("mintbadge", mintBadge);

	// const contractProcessor = useWeb3ExecuteFunction();

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	// const mintBadge = async () => {
	// 	const options = {
	// 		contractAddress: NftAddress,
	// 		functionName: "badgeMint",
	// 		abi: NftAbi,
	// 		params: {
	// 			account: user?.get("ethAddress"),
	// 			id: 1,
	// 			amount: 1,
	// 		},
	// 	};
	// 	await contractProcessor.fetch({ params: options });
	// };

	// const mintChampion = async () => {
	// 	const options = {
	// 		contractAddress: NftAddress,
	// 		functionName: "championMint",
	// 		abi: NftAbi,
	// 		params: {
	// 			account: user?.get("ethAddress"),
	// 			id: 2,
	// 			amount: 1,
	// 		},
	// 	};
	// 	await contractProcessor.fetch({ params: options });
	// };

	// console.log("mint", typeof mintChampion);

	const handleCorrect = async () => {
		setFeedback("Correct!");
		await sleep(300);
		if (page < quiz.length - 1) {
			setFeedback("");
			setPage(page + 1);
		} else {
			setIsQuizOpen(false);
			console.log("MINTS");
			// await mintBadge();
			// await mintChampion();
			console.log("MINTS");
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
