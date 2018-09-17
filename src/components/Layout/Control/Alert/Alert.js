import React from 'react';

import classes from './Alert.css';

const alert = (props) => {
	return (
		<div className={classes.alert} role="alert" id="alert">
			 <h5 className="alertText">{props.errorText}</h5>
		</div>
	);
}

export default alert;