import React, { useContext, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Cell from './Cell';
import {
	useKnightPosition,
	useSetKnightPosition,
} from './context/KnightMovedContext';
import Knight from './Knight';
import cross from '../assets/images/cross.svg';

const Board = () => {
	const [board, setBoard] = useState([]);
	const knightPosition = useKnightPosition();
	// const selectedCell = useSelectedCell();

	useEffect(() => {
		let temp = [];
		for (let y = 1; y < 9; y++) {
			for (let x = 1; x < 9; x++) {
			temp.push(
					<Cell coords={{ x: x, y: y }} key={uniqid()} id={uniqid()}>
						{knightPosition?.x === x && knightPosition?.y === y && (
								<Knight />
						)}
						{selectedCell?.x === x && selectedCell?.y === y && (
							</Cell>
						);
					}
		}
		setBoard(temp);
	}, [knightPosition, selectedCell]);

	return <div className="board">{board}</div>;
};

export default Board;
