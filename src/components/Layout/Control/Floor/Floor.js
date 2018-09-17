import React from 'react';

import classes from './Floor.css';

const floor = (props) => {
	return (
		<div className = {classes.floor}>
			<h3 className = {classes.floorText}>Floor: </h3><h3 className={classes.floorNumber}>{props.number}</h3>						
			<div className = {classes.courtesy}>
				<h5 className = {classes.culturalText}>{props.text}</h5>
			</div>
		</div>
	);
}

export default floor;

