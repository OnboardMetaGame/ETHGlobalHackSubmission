import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import OpeningWindow from "./components/OpeningWindow";
import Game from "./gameViews/Index";

import { ModalContext } from "./context/ModalContext";
import { SoundContext } from "./context/SoundContext";
import { ViewContext } from "./context/ViewContext";

import SoundOn from "./assets/sound-on.png";
import SoundOff from "./assets/sound-off.png";

function App() {
	const [sound, setSound] = useState(true);
	const [soundIcon, setSoundIcon] = useState(SoundOn);

	// modals
	const [isQuestBook, setIsQuestBook] = useState(false);
	const [isNewBadge, setIsNewBadge] = useState(false);
	const [isOptionsOpen, setIsOptionsOpen] = useState(false);
	const [isQuizOpen, setIsQuizOpen] = useState(false);
	const [isPathOpen, setIsPathOpen] = useState(false);

	const [view, setView] = useState("home");

	const handleSoundChange = () => {
		sound ? setSoundIcon(SoundOff) : setSoundIcon(SoundOn);
		setSound(!sound);
	};

	return (
		<ViewContext.Provider value={{ view, setView }}>
			<SoundContext.Provider
				value={{ sound, setSound, soundIcon, setSoundIcon, handleSoundChange }}>
				<ModalContext.Provider
					value={{
						isQuestBook,
						setIsQuestBook,
						isNewBadge,
						setIsNewBadge,
						isOptionsOpen,
						setIsOptionsOpen,
						isQuizOpen,
						setIsQuizOpen,
						isPathOpen,
						setIsPathOpen,
					}}>
					<Routes>
						<Route index element={<OpeningWindow />} exact />
						<Route path="/" element={<OpeningWindow />} />
						<Route path="game" element={<Game />} />
					</Routes>
				</ModalContext.Provider>
			</SoundContext.Provider>
		</ViewContext.Provider>
	);
}

export default App;
