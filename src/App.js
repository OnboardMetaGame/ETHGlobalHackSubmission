import { Routes, Route } from "react-router-dom";

import OpeningWindow from "./components/OpeningWindow";
import Game from "./gameViews/Index";

function App() {
	return (
		<Routes>
			<Route path="/" element={<OpeningWindow />} exact />
			<Route path="/game" element={<Game />} />
		</Routes>
	);
}

export default App;
