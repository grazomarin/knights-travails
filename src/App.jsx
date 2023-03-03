import React, { useEffect, useState } from 'react';
import { KnightPositionProvider } from './components/context/KnightMovedContext';
import { SelectedCellProvider } from './components/context/SelectedCellContext';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
	const [moves, setMoves] = useState(0);

	return (
			<KnightPositionProvider>
			<Header moves={moves} />
			<Main />
			</KnightPositionProvider>
	);
};

export default App;
