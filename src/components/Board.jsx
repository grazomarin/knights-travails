import React, { useContext, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Cell from './Cell';
import { useKnightPosition } from './context/KnightMovedContext';
import { useSelectedCell } from './context/SelectedCellContext';
import Knight from './Knight';
import cross from '../assets/images/cross.svg';

const Board = () => {
	const [board, setBoard] = useState([]);
	const knightPosition = useKnightPosition();
	const selectedCell = useSelectedCell();

	function checkIfCoordsEqual(c1, c2) {
		return c1?.x === c2?.x && c1?.y === c2?.y ? true : false;
	}

	useEffect(() => {
		let temp = [];
		for (let y = 1; y < 9; y++) {
			for (let x = 1; x < 9; x++) {
				temp.push(
					<Cell
						coords={{ x: x, y: y }}
						checkIfCoordsEqual={checkIfCoordsEqual}
						key={uniqid()}
						id={uniqid()}
					>
						{checkIfCoordsEqual(knightPosition, { x: x, y: y }) && (
							<Knight />
						)}
						{checkIfCoordsEqual(selectedCell, { x: x, y: y }) && (
							<img
								className="cross"
								src={cross}
								alt=""
								draggable="false"
							/>
						)}
					</Cell>
				);
			}
		}
		setBoard(temp);
	}, [knightPosition, selectedCell]);

	return <div className="board">{board}</div>;
};

export default Board;
