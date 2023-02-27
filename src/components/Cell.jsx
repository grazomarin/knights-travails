import React, { useState } from 'react';

const Cell = ({ coords, handleDrop, id, children }) => {
	return (
		<div
			className={`cell ${coords.y}-${coords.x}`}
			onDragOver={(e) => e.preventDefault()}
			onDrop={(e) => handleDrop(e, id)}
			style={{
				backgroundColor: `${
					coords.y % 2
						? coords.x % 2
							? 'rgb(37, 150, 190)'
							: 'rgb(255, 255, 255)'
						: coords.x % 2
						? 'rgb(255, 255, 255)'
						: 'rgb(37, 150, 190)'
				}`,
			}}
		>
			{children}
		</div>
	);
};

export default Cell;
