import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

import App from "./App";

import "./styles/index.scss";

const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;
const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;

console.log(process.env);
console.log(`Server URL: ${SERVER_URL}`);
console.log(`Application ID: ${APP_ID}`);

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<MoralisProvider serverUrl={SERVER_URL} appId={APP_ID}>
				<App />
			</MoralisProvider>
		</React.StrictMode>
	</Router>,
	document.getElementById("root"),
);
