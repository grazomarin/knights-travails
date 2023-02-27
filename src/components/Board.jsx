import React, { useContext, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Cell from './Cell';
import Knight from './Kinght';
import { SetMovedContext } from './Main';

const Board = () => {
	const [board, setBoard] = useState(returnBoard());
	const setMoved = useContext(SetMovedContext);

	function returnBoard() {
		let temp = [];
		let i = 1;
		let j = 1;

		while (i < 9 && j < 9) {
			temp.push(
				<Cell
					coords={{ x: i, y: j }}
					handleDrop={handleDrop}
					key={uniqid()}
					id={uniqid()}
				/>
			);
			i++;

			if (i === 9) {
				j++;
				i = 1;
			}
		}

		return temp;
	}

	function handleDrop(e, id) {
		e.preventDefault();
		setMoved(true);
		if (e.target.className.split(' ')[0] === 'cell') {
			setBoard(
				board.map((cell) => {
					if (cell.props.id === id) {
						const c = cell.props.coords;
						return (
							<Cell
								coords={{ x: c.x, y: c.y }}
								handleDrop={handleDrop}
								id={uniqid()}
								key={uniqid()}
							>
								<Knight />
							</Cell>
						);
					}
					return cell;
				})
			);
		}
	}

	return <div className="board">{board}</div>;
};

export default Board;
