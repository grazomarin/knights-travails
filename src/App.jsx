import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
	const [moves, setMoves] = useState(0);

	return (
		<>
			<Header moves={moves} />
			<Main />
		</>
	);
};

export default App;
