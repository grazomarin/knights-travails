import React, { useState } from 'react';
import Board from './Board';
import Knight from './Kinght';

export const SetMovedContext = React.createContext();

const Main = () => {
	const [moved, setMoved] = useState(false);

	return (
		<div className="main">
			<div className="left">
				<div
					className="knight-cont"
					style={{ display: moved ? 'none' : 'display' }}
				>
					<Knight />
				</div>
				<div className="button-cont">
					<div className="button">Move</div>
					<div className="button">Reset</div>
				</div>
			</div>
			<SetMovedContext.Provider value={setMoved}>
				<Board />
			</SetMovedContext.Provider>
		</div>
	);
};

export default Main;
