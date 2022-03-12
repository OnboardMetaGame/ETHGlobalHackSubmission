import { discricts } from "../data/Disctricts";

import { ViewContext } from "../context/ViewContext";

import { useContext } from "react";

const Home = () => {
	const { setView } = useContext(ViewContext);

	const handleViewChange = (targetView) => {
		targetView === "comingsoon" ? setView("home") : setView(targetView);
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
