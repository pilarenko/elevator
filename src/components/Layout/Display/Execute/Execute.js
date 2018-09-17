import React from 'react';
import classes from './Execute.css';

const execute = (props) => {
	return (
		<div className = {classes.execute}>
			<button className={classes.executeBtn} type="submit" onClick = {props.drop}>Execute</button>
		</div>
	);
}

export default execute;