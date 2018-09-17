import React from 'react';

import Floor from './Floor/Floor';

import classes from './Lane.css';

const lane = (props) => {
	return (
		<div className={classes.lane}>
			<Floor passengers={props.passengers.first}/>
			<Floor passengers={props.passengers.second}/>
			<Floor passengers={props.passengers.third}/>
		</div>
	);
}

export default lane;

