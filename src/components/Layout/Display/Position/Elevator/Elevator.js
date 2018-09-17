import React from 'react';

import {Motion, spring} from "react-motion";

import classes from './Elevator.css';

const elevator = (props) => {
	return (
			<div className={classes.shaft}>
				<Motion 
					defaultStyle = {{y: props.defaultStyle, opacity: 0}} 
					style = {{y: spring(props.style), opacity: 1}}
				>
					{(style) => (
						<div className = {classes.elevator} 
							style = {{
								transform: `translateY(${style.y}px)`, 
								opacity: style.opacity,
							}} 
						>
							<h3>{props.elevator}</h3>
						</div>
					)}
					</Motion>
			</div>
	);
}

export default elevator;

