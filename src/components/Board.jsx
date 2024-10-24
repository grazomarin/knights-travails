import React, { useContext, useEffect, useMemo, useState } from "react";
import uniqid from "uniqid";
import Cell from "./Cell";
import { useKnightPosition } from "./context/KnightMovedContext";
import { useSelectedCell } from "./context/SelectedCellContext";
import Knight from "./Knight";
import cross from "../assets/images/cross.svg";

const Board = () => {
	const knightPosition = useKnightPosition();
	const selectedCell = useSelectedCell();
	const board = useMemo(
		() =>
			(() => {
				let board = [];
				for (let y = 0; y < 8; y++) {
					for (let x = 0; x < 8; x++) {
						board.push(
							<Cell
								coords={{ x: x, y: y }}
								checkIfCoordsEqual={checkIfCoordsEqual}
								key={uniqid()}
								id={uniqid()}
							>
								{checkIfCoordsEqual(knightPosition, { x: x, y: y }) && <Knight />}
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
				return board;
			})(),
		[knightPosition, selectedCell]
	);

	function checkIfCoordsEqual(c1, c2) {
		return c1?.x === c2?.x && c1?.y === c2?.y ? true : false;
	}

	return <div className="board">{board}</div>;
};

export default Board;
