import React, { useEffect, useState } from 'react';
import { KnightPositionProvider } from './components/context/KnightMovedContext';
import { MoveCountProvider } from './components/context/MoveCountContext';
import { SelectedCellProvider } from './components/context/SelectedCellContext';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
	return (
		<SelectedCellProvider>
			<KnightPositionProvider>
				<MoveCountProvider>
					<Header />
					<Main />
				</MoveCountProvider>
			</KnightPositionProvider>
		</SelectedCellProvider>
	);
};

export default App;
