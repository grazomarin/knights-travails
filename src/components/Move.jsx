import React, { useState } from 'react';
import {
	useKnightPosition,
	useSetKnightPosition,
} from './context/KnightMovedContext';
import {
	useSelectedCell,
	useSetSelectedCell,
} from './context/SelectedCellContext';
import returnShortestPath from '../logic';
import { useSetMoveCount } from './context/MoveCountContext';

const Move = () => {
	const knightPosition = useKnightPosition();
	const selectedCell = useSelectedCell();
	const setKnightPosition = useSetKnightPosition();
	const setSelectedCell = useSetSelectedCell();
	const setMoveCount = useSetMoveCount();

	function moveKnightWithDelay(moveset) {
		if (moveset.length === 0) {
			setSelectedCell({});
			return;
		}
		const move = moveset[0];
		setTimeout(function () {
			setKnightPosition((prev) => {
				return {
					x: move[0],
					y: prev.y,
				};
			});
		}, 400);

		setTimeout(function () {
			setKnightPosition((prev) => {
				return {
					x: prev.x,
					y: move[1],
				};
			});
			setMoveCount((prev) => (prev += 1));
			moveKnightWithDelay(moveset.slice(1));
		}, 800);
	}

	function handleMove() {
		if (!knightPosition.x || !selectedCell.x) return;
		setMoveCount(0);
		const shortestPath = returnShortestPath(
			[knightPosition.x, knightPosition.y],
			[selectedCell.x, selectedCell.y]
		);
		moveKnightWithDelay(shortestPath);
	}

	return (
		<div className="button" onClick={handleMove}>
			Move
		</div>
	);
};

export default Move;
