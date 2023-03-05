import React, { useContext, useState } from 'react';

const MoveCount = React.createContext();
const SetMoveCount = React.createContext();

export const useMoveCount = () => useContext(MoveCount);
export const useSetMoveCount = () => useContext(SetMoveCount);

export const MoveCountProvider = ({ children }) => {
	const [count, setCount] = useState(0);

	return (
		<MoveCount.Provider value={count}>
			<SetMoveCount.Provider value={setCount}>
				{children}
			</SetMoveCount.Provider>
		</MoveCount.Provider>
	);
};
