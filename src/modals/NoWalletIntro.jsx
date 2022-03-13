import ConnectBtn from "../assets/connect-btn.png";
import useLogin from "../hooks/useLogin";
import NextBtn from "../assets/next.png";
import BackBtn from "../assets/back.png";
import GetWalletBtn from "../assets/get-wallet.png";

import { useState } from "react";
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import { NftAbi, NftAddress } from "../contracts/Nfts";

const NoWalletIntro = ({ setIsModalOpen }) => {
	const { user } = useMoralis();
	const [page, setPage] = useState(0);

	const {
		error: QuestbookMintError,
		fetch: mintQuestbook,
		isFetching: mintingQuestbook,
	} = useWeb3ExecuteFunction({
		abi: NftAbi,
		contractAddress: NftAddress,
		functionName: "badgeMint",
		params: {
			account: user?.get("ethAddress"),
			id: 1,
			amount: 1,
		},
	});

	const handleConnect = async () => {
		login();
		await mintQuestbook();
		setIsModalOpen(false);
	};

	const { login } = useLogin();

	const RenderInfo = () => {
		switch (page) {
			case 0:
				return (
					<>
						<div className="title">{"Welcome \n Onboard :) !!"}</div>
						<div className="body">
							<p>
								Oh Snap! Looks like you don;t have a wallet. Don't worry we got
								you. Follow these steps
							</p>
						</div>
						<div className="btn">
							<img
								className="nav-btn"
								onClick={() => setPage(page)}
								src={BackBtn}
								alt="back"
							/>
							<img
								className="nav-btn"
								onClick={() => setPage(page + 1)}
								src={NextBtn}
								alt="next"
							/>
						</div>
					</>
				);
			case 1:
				return (
					<>
						<div className="title">{"Wallets? 💸"}</div>
						<div className="body">
							<p>
								A blockchain wallet is a cryptocurrency wallet that allows users
								to manage different kinds of cryptocurrencies. A blockchain
								wallet is your entry in Web3.0 that enabl you to make
								transactions and sign messages. Transactions are secure, as they
								are cryptographically signed.
							</p>
						</div>
						<div className="btn">
							<img
								className="nav-btn"
								onClick={() => setPage(page - 1)}
								src={BackBtn}
								alt="back"
							/>
							<img
								className="nav-btn"
								onClick={() => setPage(page + 1)}
								src={NextBtn}
								alt="next"
							/>
						</div>
					</>
				);
			case 2:
				return (
					<>
						<div className="title">{"Metamask? 💸"}</div>
						<div className="body">
							<p>
								MetaMask is a software cryptocurrency wallet used to interact
								with the Ethereum blockchain. It allows users to access their
								Ethereum wallet through a browser extension or mobile app, which
								can then be used to interact with decentralized applications
							</p>
						</div>
						<div className="btn">
							<img
								className="nav-btn"
								onClick={() => setPage(page - 1)}
								src={BackBtn}
								alt="back"
							/>
							<a href="https://metamask.io/" rel="noreferrer" target="_blank">
								<img
									className="action-btn"
									src={GetWalletBtn}
									alt="get-wallet"
								/>
							</a>
							<img
								className="nav-btn"
								onClick={() => setPage(page + 1)}
								src={NextBtn}
								alt="next"
							/>
						</div>
					</>
				);
			case 3:
				return (
					<>
						<div className="title">{"Welcome Onboard :) !!"}</div>
						<div className="body">
							<p>
								We are very excited to get you into the revolution that is
								Web3.0
							</p>
						</div>
						<div className="btn">
							<img
								className="nav-btn"
								onClick={() => setPage(page - 1)}
								src={BackBtn}
								alt="back"
							/>
							{/* {typeof window.ethereum !== "undefined" ? ( */}
							<img
								className="action-btn"
								onClick={handleConnect}
								src={ConnectBtn}
								alt="connect"
							/>
							{/* // ) : ( //{" "}
							<img className="action-btn" src={BlankBtn} alt="connect" />
							// )} */}
							<img
								className="nav-btn"
								onClick={() => setPage(page)}
								src={NextBtn}
								alt="next"
							/>
						</div>
					</>
				);
			default:
				return (
					<>
						<div className="title">{"Welcome Onboard :) !!"}</div>
						<div className="body">
							<p>
								Oh Snap! Looks like you don't have a wallet. Don't worry we got
								you. Follow these steps
							</p>
						</div>
						<div className="btn">
							<img onClick={() => setPage(page)} src={BackBtn} alt="back" />
							<img onClick={() => setPage(page + 1)} src={NextBtn} alt="next" />
						</div>
					</>
				);
		}
	};

	return <div className="no-wallet-modal">{RenderInfo()}</div>;
};

export default NoWalletIntro;
