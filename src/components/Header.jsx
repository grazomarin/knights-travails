import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';

const Header = ({ moves }) => {
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
			<img className="logo" src={logo} alt="" />
		</div>
	);
};

export default Header;
