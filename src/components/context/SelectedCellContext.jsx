import React, { useContext, useState } from 'react';

const selectedCellContext = React.createContext();
const SetSelectedCellContext = React.createContext();

export const useSelectedCell = () => useContext(selectedCellContext);
export const useSetSelectedCell = () => useContext(SetSelectedCellContext);

export const SelectedCellProvider = ({ children }) => {
	const [position, setPosition] = useState({});

	return (
		<selectedCellContext.Provider value={position}>
			<SetSelectedCellContext.Provider value={setPosition}>
				{children}
			</SetSelectedCellContext.Provider>
		</selectedCellContext.Provider>
	);
};
