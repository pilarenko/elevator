import React from 'react';
import classes from './Hug.css';

const hug = (props) => {
	return (
		<div className={classes.hug}>
			{props.children}
		</div>
	);
}

export default hug;

