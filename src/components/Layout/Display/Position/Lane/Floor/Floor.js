import React from 'react';

import classes from './Floor.css';

const floor = (props) => {
	let people = "";
	const human = <i className={["fas fa-male animateOnce", classes.human].join(" ")}></i>;
	if (props.passengers !== 0) {
		people = Array(props.passengers).fill(human);
	}

	return (
		<div className={classes.floor}>
			{people}
		</div>
	);
}

export default floor;

