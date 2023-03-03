import React, { useState } from 'react';
import { useSetKnightPosition } from './context/KnightMovedContext';
import { useSetSelectedCell } from './context/SelectedCellContext';

const Reset = () => {
	const setKnightPosition = useSetKnightPosition();
	const setSelectedCell = useSetSelectedCell();

	const reset = () => {
		setKnightPosition({});
		setSelectedCell({});
	};

	return (
		<div className="button" onClick={reset}>
			Reset
		</div>
	);
};

export default Reset;
