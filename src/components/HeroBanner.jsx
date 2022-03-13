import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const HeroBanner = () => {
	// let navigate = useNavigate();
	return (
		<div className="hero-banner">
			<div className="image-container">
				<img src="../assets/wiz1.png" alt="" />
			</div>
			<div className="text-container">
				<div className="login-container">
					<p className="heading">Skills Update?</p>
					<p className="login-btn"> Wisdom Spell</p>
					<p className="login-btn"> Agility Spell</p>
					<p className="login-btn"> Farming Spell</p>

					{/* need to show the updated stats of skills when user click yes */}
					<p className="login-btn1"> Yes</p>

					{/* <p className="login-btn" onClick={handleonClick }> QuestBook</p>  */}
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
