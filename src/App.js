import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import OpeningWindow from "./components/OpeningWindow";
import Game from "./gameViews/Index";

import SoundOn from "./assets/sound-on.png";
import SoundOff from "./assets/sound-off.png";

function App() {
	const [sound, setSound] = useState(true);
	const [soundIcon, setSoundIcon] = useState(SoundOn);

	const handleSoundChange = () => {
		sound ? setSoundIcon(SoundOff) : setSoundIcon(SoundOn);
		setSound(!sound);
	};
	return (
		<Routes>
			<Route
				path="/"
				element={
					<OpeningWindow
						handleSoundChange={handleSoundChange}
						soundIcon={soundIcon}
					/>
				}
				exact
			/>
			<Route
				path="/game"
				element={
					<Game handleSoundChange={handleSoundChange} soundIcon={soundIcon} />
				}
			/>
		</Routes>
	);
}

export default App;
