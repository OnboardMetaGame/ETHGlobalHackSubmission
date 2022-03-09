import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

import App from "./App";

import "./styles/index.scss";

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<MoralisProvider
				serverUrl={process.env.MORALIS_SERVER_URL}
				appId={process.env.MORALIS_APP_ID}>
				<App />
			</MoralisProvider>
		</React.StrictMode>
	</Router>,
	document.getElementById("root"),
);
