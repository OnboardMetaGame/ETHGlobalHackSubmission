import { Paths } from "../data/Quiz";
import { ModalContext } from "../context/ModalContext";
import { ViewContext } from "../context/ViewContext";

import { useState, useContext } from "react";

import Path from "../modals/LearningPath";
import Quiz from "../modals/Quiz";
import BackBtn from "../assets/back.png";

import "../styles/academy.scss";

const Academy = () => {
	const [info, setInfo] = useState(Paths[0].info);
	const [quiz, setQuiz] = useState(Paths[0].quiz);
	const { isPathOpen, setIsPathOpen, isQuizOpen } = useContext(ModalContext);
	const { setView } = useContext(ViewContext);

	return (
		<div className="academy-tab">
			<img
				className="to-home"
				onClick={() => setView("home")}
				src={BackBtn}
				alt="back"
			/>
			<div className="title">All Paths</div>
			<div className="paths">
				{Paths.map((path) => (
					<div
						className="path"
						key={path.id}
						onClick={() => {
							setInfo(path.info);
							setQuiz(path.quiz);
							setIsPathOpen(true);
						}}>
						<div className="path-name">{path.name}</div>
						<div className="path-description">{path.description}</div>
					</div>
				))}
			</div>
			{isPathOpen && <Path info={info} />}
			{isQuizOpen && <Quiz quiz={quiz} />}
		</div>
	);
};

export default Academy;
