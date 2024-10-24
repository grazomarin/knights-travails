import React, { useContext, useState } from "react";

const KnightPositionContext = React.createContext();
const SetKnightPositionContext = React.createContext();

export const useKnightPosition = () => useContext(KnightPositionContext);
export const useSetKnightPosition = () => useContext(SetKnightPositionContext);

export const KnightPositionProvider = ({ children }) => {
	const [position, setPosition] = useState({});

	return (
		<KnightPositionContext.Provider value={position}>
			<SetKnightPositionContext.Provider value={setPosition}>
				{children}
			</SetKnightPositionContext.Provider>
		</KnightPositionContext.Provider>
	);
};
