import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Champion from "../assets/champion.png";

const HeroBanner = () => {
	// let navigate = useNavigate();
	return (
		<div className="hero-banner">
			<div className="image-container">
				<img src={Champion} alt="champ" />
			</div>
			<div className="text-container">
				<div className="login-container">
					<p className="heading">Skills Update?</p>
					<p className="login-btn"> Wisdom Spell</p>
					<p className="login-btn"> Agility Spell</p>
					<p className="login-btn"> Farming Spell</p>
					<p className="login-btn1 conf"> Yes</p>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
