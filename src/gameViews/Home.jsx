import { discricts } from "../data/Disctricts";

import { ViewContext } from "../context/ViewContext";
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import { NftAbi, NftAddress } from "../contracts/Nfts";

import { useContext, useEffect } from "react";

const Home = () => {
	const { setView } = useContext(ViewContext);
	const { user } = useMoralis();
	const contractProcessor = useWeb3ExecuteFunction();

	const getBalance = async () => {
		const options = {
			contractAddress: NftAddress,
			functionName: "balanceOf",
			abi: NftAbi,
			params: {
				account: user?.get("ethAddress"),
			},
		};
		const balance = await contractProcessor.fetch({ params: options });
		const res = await balance;
		return res;
	};

	// console.log("balance", getBalance());

	const handleViewChange = (targetView) => {
		setView(targetView);
	};

	return (
		<div className="home">
			{discricts.map(({ id, name, image, className }) => {
				return (
					<div
						key={id}
						onClick={() => handleViewChange(className)}
						className={`${className} district`}>
						<img src={image} alt={name} />
						<div className="label">{name}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
