import React, { useState } from 'react';
import Board from './Board';
import { useKnightPosition } from './context/KnightMovedContext';
import Knight from './Knight';

const Main = () => {
	const knightPosition = useKnightPosition();

	return (
		<div className="main">
			<div className="left">
				<div
					className="knight-cont"
					style={{ display: knightPosition.x ? 'none' : 'block' }}
				>
					<Knight />
				</div>
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
