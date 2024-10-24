import React, { useState, useRef } from "react";
import Board from "./Board";
import { useKnightPosition } from "./context/KnightMovedContext";
import Knight from "./Knight";
import Move from "./Move";
import Reset from "./Reset";

const Main = () => {
	const knightPosition = useKnightPosition();
	const isExecutingRef = useRef(false);

	return (
		<div className="main">
			<div className="left">
				<div
					className="knight-cont"
					style={{ display: knightPosition.x == null ? "flex" : "none" }}
				>
					<Knight />
				</div>
				<div className="button-cont">
					<Move isExecutingRef={isExecutingRef} />
					<Reset isExecutingRef={isExecutingRef} />
				</div>
			</div>
			<Board />
		</div>
	);
};

export default Main;
