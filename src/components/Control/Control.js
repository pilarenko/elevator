import React from 'react';
// import classes from './Control.css';
import './Control.css';


const control = (props) => {
	return (
		<div className = 'control bShadow-6'>
			<h1>Control</h1>
				<div className = 'col-lg'>
					<div className = 'floor'>
						<h3 id = 'floorNum'>Floor: </h3><h3>{props.number}</h3>						
						<div id = 'courtesy'>
							<h5>{props.text}</h5>
						</div>
					</div>
				</div>
				<div className="alert alert-danger" role="alert">
				  <h5 className="alertText">Type correct value!</h5>
				</div>
		</div>
	);
}

export default control;