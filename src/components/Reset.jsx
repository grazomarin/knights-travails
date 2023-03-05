import React, { useState } from 'react';
import { useSetKnightPosition } from './context/KnightMovedContext';
import { useSetMoveCount } from './context/MoveCountContext';
import { useSetSelectedCell } from './context/SelectedCellContext';

const Reset = () => {
	const setKnightPosition = useSetKnightPosition();
	const setSelectedCell = useSetSelectedCell();
	const setMoveCount = useSetMoveCount();

	const reset = () => {
		setKnightPosition({});
		setSelectedCell({});
		setMoveCount(0);
	};

	return (
		<div className="button" onClick={reset}>
			Reset
		</div>
	);
};

export default Reset;
