import React from 'react';

import Lane from './Lane/Lane';
import Passengers from './Passengers/Passengers';
import Elevator from './Elevator/Elevator';

import classes from './Position.css';

const position = (props) => {
	return (
		<div className={classes.position}>
			<Elevator
				defaultStyle={props.defaultStyle}
				style={props.style}
				elevator={props.elevator}
			/>
			<Lane
				passengers={props.passengers}
			/>
			<Passengers 
				passengers={props.passengers}
				clicked={props.clicked}
				confirm={props.confirm}
			/>
		</div>
	);
}

export default position;

