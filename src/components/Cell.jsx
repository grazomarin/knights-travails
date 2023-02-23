import React, { useState } from 'react';

const Cell = ({ coords }) => {
	return <div className={`cell ${coords.y}-${coords.x}`}></div>;
};

export default Cell;
