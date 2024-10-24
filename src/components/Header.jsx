import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { useMoveCount } from "./context/MoveCountContext";

const Header = () => {
	const moves = useMoveCount();

	return (
		<div className="header">
			<div className="title">
				<a
					href="https://github.com/grazomarin/Knights-Travails"
					target="_blank"
				>
					Knights Travail
				</a>
			</div>
			<div className="moves">Number Of Moves: {moves}</div>
			<img
				className="logo"
				src={logo}
				alt=""
			/>
		</div>
	);
};

export default Header;
