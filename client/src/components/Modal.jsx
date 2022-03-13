import React from "react";

const Modal = ({ handleonClick }) => {
	return (
		<div className="modal">
			<div className="modal-image-container">
				<span className="modal-on" onClick={handleonClick}>
					x
				</span>
				<img src="../assets/wiz.png" alt="image" />
			</div>
		</div>
	);
};

export default Modal;
