import { useState, useEffect } from "react";
import {
	useMoralis,
	useWeb3ExecuteFunction,
	useMoralisQuery,
} from "react-moralis";

import WalletIntro from "../modals/WalletIntro";
import NoWalletIntro from "../modals/NoWalletIntro";

const IntroModal = ({ setIsModalOpen }) => {
	const [isBrowserWallet, setIsBrowserWallet] = useState(
		typeof window?.ethereum !== "undefined",
	);

	const { isAuthenticated, isWeb3Enabled, enableWeb3, isWeb3EnableLoading } =
		useMoralis();

	useEffect(() => {
		if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
		setIsBrowserWallet(typeof window?.ethereum !== "undefined");
	}, [isAuthenticated, isWeb3Enabled]);

	return (
		<div className="modal-bg">
			{isBrowserWallet ? (
				<WalletIntro setIsModalOpen={setIsModalOpen} />
			) : (
				<NoWalletIntro setIsModalOpen={setIsModalOpen} />
			)}
		</div>
	);
};

// const {
// 	data: stakedBalance,
// 	error: stakedBalanceError,
// 	fetch: fetchStakedBalance,
// 	isFetching: isStakedBalanceLoading,
// } = useWeb3ExecuteFunction({
// 	abi: erc20Abi,
// 	contractAddress: SGHODA_TOKEN_ADDRESS,
// 	functionName: "balanceOf",
// 	params: {
// 		account: user?.get("ethAddress"),
// 	},
// });

export default IntroModal;
