import React, { useState } from 'react';

const Cell = ({ coords, handleDrop, id, children }) => {
	return (
		<div
			className={`cell ${coords.y}-${coords.x}`}
			onDragOver={(e) => e.preventDefault()}
			onDrop={(e) => handleDrop(e, id)}
		>
			{children}
		</div>
	);
};

export default Cell;
