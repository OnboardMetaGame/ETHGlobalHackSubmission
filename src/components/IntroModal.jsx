import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

import ConnectBtn from "../assets/connect-btn.png";

const IntroModal = ({ setIsModalOpen }) => {
	const {
		authenticate,
		isAuthenticated,
		isWeb3Enabled,
		enableWeb3,
		isWeb3EnableLoading,
		user,
	} = useMoralis();

	useEffect(() => {
		if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
	}, [isAuthenticated, isWeb3Enabled]);

	const login = async () => {
		// if (!isAuthenticated) {
		await authenticate({ signingMessage: "Log into Onboard" })
			.then(function (user) {
				console.log("logged in user:", user);
				console.log(user?.get("ethAddress"));
			})
			.catch(function (error) {
				console.log(error);
			});
		// }
		setIsModalOpen(false);
	};

	return (
		<div className="modal-bg">
			<div className="modal">
				<div className="wallet">
					<div className="title">{"Welcome Onboard :) !!"}</div>
					<div className="body">
						<p>
							We are very excited to get you into the revolution that is Web3.0
						</p>
					</div>
					<div className="btn">
						<img onClick={login} src={ConnectBtn} alt="connect" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default IntroModal;
