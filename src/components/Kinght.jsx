import React, { useState } from 'react';
import knight from '../assets/images/knight.svg';

const Knight = () => {
	return <img className="knight" src={knight} alt="" draggable />;
};

export default Knight;
