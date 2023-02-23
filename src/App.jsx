import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';

const App = () => {
	const [moves, setMoves] = useState(0);

	return (
		<>
			<Header moves={moves} />
			<Board />
		</>
	);
};

export default App;
