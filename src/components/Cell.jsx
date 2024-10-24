import React, { useState } from "react";
import { useKnightPosition, useSetKnightPosition } from "./context/KnightMovedContext";
import { useSetMoveCount } from "./context/MoveCountContext";
import { useSelectedCell, useSetSelectedCell } from "./context/SelectedCellContext";

const Cell = ({ coords, id, children, checkIfCoordsEqual }) => {
	const knightPosition = useKnightPosition();
	const setKnightPosition = useSetKnightPosition();
	const selectedCell = useSelectedCell();
	const setSelectedCell = useSetSelectedCell();
	const setMoveCount = useSetMoveCount();

	function handleClick() {
		if (knightPosition.x == null) return;
		if (!checkIfCoordsEqual(knightPosition, coords) && !checkIfCoordsEqual(selectedCell, coords)) {
			setSelectedCell({
				x: coords.x,
				y: coords.y,
			});
		}
	}

	function handleDrop(e) {
		e.preventDefault();
		const targetClassName = e.target.className.split(" ")[0];

		if (targetClassName === "cell") {
			setKnightPosition({
				x: coords.x,
				y: coords.y,
			});
			setMoveCount(0);
		}
	}

	return (
		<div
			className={`cell ${coords.y}-${coords.x}`}
			onDragOver={(e) => e.preventDefault()}
			onDrop={(e) => handleDrop(e, id)}
			onClick={(e) => handleClick(id)}
			style={{
				backgroundColor: `${
					coords.y % 2
						? coords.x % 2
							? "rgb(37, 150, 190)"
							: "rgb(255, 255, 255)"
						: coords.x % 2
						? "rgb(255, 255, 255)"
						: "rgb(37, 150, 190)"
				}`,
			}}
		>
			{children}
		</div>
	);
};

export default Cell;
