import React from 'react';

import classes from './Display.css';

// import {Motion, spring} from "react-motion";
import Position from './Position/Position';
import Execute from './Execute/Execute';

const display = (props) => {

	return (
		<div className = {classes.display}>
			<h1>Display</h1>
			<Position
				passengers={props.passengers}
				clicked={props.clicked}
				confirm={props.confirm}

				defaultStyle={props.defaultStyle}
				style={props.style}
				elevator={props.elevator}
			>
			</Position>
			<Execute drop={props.drop} />
		</div>
	);
}

export default display;