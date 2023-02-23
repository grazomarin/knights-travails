import React, { useState } from 'react';
import uniqid from 'uniqid';
import Cell from './Cell';

const Board = () => {
	const board = (function () {
		let temp = [];
		let row = [];
		let i = 0;
		let j = 0;

		while (i < 10 && j < 10) {
			row.push(<Cell coords={{ x: i, y: j }} key={uniqid()} />);
			i++;

			if (i === 10) {
				temp.push(
					<div className="row" key={uniqid()}>
						{...row}
					</div>
				);
				row = [];
				j++;
				i = 0;
			}
		}
		return temp;
	})();

	return <div className="board">{board}</div>;
};

export default Board;
