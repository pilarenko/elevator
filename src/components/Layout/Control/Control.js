import React from 'react';

import Floor from './Floor/Floor';
import Alert from './Alert/Alert';

import classes from './Control.css';

const control = (props) => {
	const alertText = props.error;
	let alert = "";
	if (alertText !== "") {
		alert = <Alert errorText={alertText}/>;
	}

	return (
		<div className = {classes.control}>
			<h1>Control</h1>
			<Floor 
				number={props.number} 
				text={props.text}
			/>
			{alert}
		</div>
	);
}

export default control;