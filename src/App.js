import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import OpeningWindow from "./components/OpeningWindow";
import Game from "./gameViews/Index";

import { ModalContext } from "./context/ModalContext";
import { SoundContext } from "./context/SoundContext";
import { ViewContext } from "./context/ViewContext";
import { UserContext } from "./context/UserContext";

import { useMoralis } from "react-moralis";

import SoundOn from "./assets/sound-on.png";
import SoundOff from "./assets/sound-off.png";

function App() {
	const [sound, setSound] = useState(true);
	const [soundIcon, setSoundIcon] = useState(SoundOn);

	const { isAuthenticated, isWeb3Enabled, enableWeb3, isWeb3EnableLoading } =
		useMoralis();

	// modals
	const [isQuestBook, setIsQuestBook] = useState(false);
	const [isNewBadge, setIsNewBadge] = useState(false);
	const [isNewQuestbook, setIsNewQuestbook] = useState(false);
	const [isOptionsOpen, setIsOptionsOpen] = useState(false);
	const [isQuizOpen, setIsQuizOpen] = useState(false);
	const [isPathOpen, setIsPathOpen] = useState(false);
	const [counts, setCounts] = useState({
		badge: 0,
		quest: 0,
		quiz: 0,
		questbook: 0,
		champion: 0,
	});

	const [view, setView] = useState("home");

	const handleSoundChange = () => {
		sound ? setSoundIcon(SoundOff) : setSoundIcon(SoundOn);
		setSound(!sound);
	};

	useEffect(() => {
		if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
	}, [isAuthenticated, isWeb3Enabled]);

	return (
		<UserContext.Provider value={{ counts, setCounts }}>
			<ViewContext.Provider value={{ view, setView }}>
				<SoundContext.Provider
					value={{
						sound,
						setSound,
						soundIcon,
						setSoundIcon,
						handleSoundChange,
					}}>
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
							isNewQuestbook,
							setIsNewQuestbook,
						}}>
						<Routes>
							<Route index element={<OpeningWindow />} exact />
							<Route path="/" element={<OpeningWindow />} />
							<Route path="game" element={<Game />} />
						</Routes>
					</ModalContext.Provider>
				</SoundContext.Provider>
			</ViewContext.Provider>
		</UserContext.Provider>
	);
}

export default App;
