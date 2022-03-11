import ConnectBtn from "../assets/connect-btn.png";
import useLogin from "../hooks/useLogin";

const WalletIntro = ({ setIsModalOpen }) => {
	const [login] = useLogin();

	const handleConnect = () => {
		login();
		setIsModalOpen(false);
	};

	return (
		<div className="modal">
			<div className="wallet">
				<div className="title">{"Welcome Onboard :) !!"}</div>
				<div className="body">
					<p>
						We are very excited to get you into the revolution that is Web3.0
					</p>
				</div>
				<div className="btn">
					<img onClick={handleConnect} src={ConnectBtn} alt="connect" />
				</div>
			</div>
		</div>
	);
};

export default WalletIntro;
