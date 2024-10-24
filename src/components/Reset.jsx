import React, { useState } from "react";
import { useSetKnightPosition } from "./context/KnightMovedContext";
import { useSetMoveCount } from "./context/MoveCountContext";
import { useSetSelectedCell } from "./context/SelectedCellContext";

const Reset = ({ isExecutingRef }) => {
	const setKnightPosition = useSetKnightPosition();
	const setSelectedCell = useSetSelectedCell();
	const setMoveCount = useSetMoveCount();

	const handleClick = () => {
		isExecutingRef.current = false;
		setKnightPosition({ x: null, y: null });
		setSelectedCell({ x: null, y: null });
		setMoveCount(0);
	};

	return (
		<div
			className="button"
			onClick={handleClick}
		>
			Reset
		</div>
	);
};

export default Reset;
