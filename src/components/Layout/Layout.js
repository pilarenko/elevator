import React from 'react';
import classes from './Layout.css';

import Display from './Display/Display';
import Control from './Control/Control';

const layout = (props) => {
	return (
		<div className={classes.layout}>
			<Display
			  clicked={props.clicked}
			  passengers={props.passengers}
			  elevator={props.elevator}
			  confirm={props.confirm}
			  drop={props.drop}
			  defaultStyle ={props.defaultStyle}
			  style ={props.style}
			/>
			<Control 
				text={props.text} 
				number={props.number} 
				error={props.error}
			/>
		</div>
	);
}

export default layout;