import React, { useState } from 'react';
import Board from './Board';
import Knight from './Kinght';

const Main = () => {
	return (
		<div className="main">
			<div className="knight-cont">
				<Knight />
				<div className="button-cont">
					<div className="button">Move</div>
					<div className="button">Reset</div>
				</div>
			</div>
			<Board />
		</div>
	);
};

export default Main;
