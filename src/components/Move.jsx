import React, { useRef, useState } from "react";
import { useKnightPosition, useSetKnightPosition } from "./context/KnightMovedContext";
import { useSelectedCell, useSetSelectedCell } from "./context/SelectedCellContext";
import returnShortestPath from "../logic";
import { useSetMoveCount } from "./context/MoveCountContext";
const Move = ({ isExecutingRef }) => {
	const knightPosition = useKnightPosition();
	const selectedCell = useSelectedCell();
	const setKnightPosition = useSetKnightPosition();
	const setSelectedCell = useSetSelectedCell();
	const setMoveCount = useSetMoveCount();

	function moveKnightWithDelay(moveset, callback) {
		if (moveset.length === 0) {
			// Movement complete, call the callback
			if (callback) callback();
			return;
		}

		const move = moveset[0];

		setTimeout(() => {
			if (!isExecutingRef.current) return;
			setKnightPosition((prev) => {
				return {
					x: move[0],
					y: prev.y,
				};
			});
		}, 400);

		setTimeout(() => {
			if (!isExecutingRef.current) return;
			setKnightPosition((prev) => {
				return {
					x: prev.x,
					y: move[1],
				};
			});

			setMoveCount((prev) => prev + 1);
			// Recursive call with remaining moves
			moveKnightWithDelay(moveset.slice(1), callback);
		}, 800);
	}

	function handleMove() {
		if (isExecutingRef.current) return;
		if (selectedCell.x == null) return;
		isExecutingRef.current = true;

		setMoveCount(0);

		const shortestPath = returnShortestPath(
			[knightPosition.x, knightPosition.y],
			[selectedCell.x, selectedCell.y]
		);

		// if reset button is clicked the callback will not be called
		// but the reset button action "extends" callback
		moveKnightWithDelay(shortestPath, () => {
			isExecutingRef.current = false; // Reset isExecuting state after movement is complete
			setSelectedCell({ x: null, y: null });
		});
	}

	return (
		<div
			className="button"
			onClick={() => handleMove()}
		>
			Move
		</div>
	);
};

export default Move;
