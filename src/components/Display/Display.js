import React from 'react';
// import classes from './Display.css';
import './Display.css';
import {Motion, spring} from "react-motion";

	const display = (props) => {
	const human = <i className="fas fa-male animateOnce"></i>;


	// to też się da lepiej zrobić obiektem 

	let floorFirst;
	let floorSecond;
	let floorThird;
	let first = [];
	let second = [];
	let third = [];

	let firstCount = props.passengers.first;
	let secondCount = props.passengers.second;
	let thirdCount = props.passengers.third;

	while (firstCount !== 0) {
		first.push(human);
		floorFirst = 	
		<div className = "floorCheck first">
			<input type="input" className="form-control" name = "confirm" placeholder="Floor:"/>
			<i className="confirm fas fa-check" onClick = {props.confirm}></i>
		</div>;
		firstCount = firstCount - 1;
	}

	while (secondCount !== 0) {
		second.push(human);
		floorSecond = 	
		<div className = "floorCheck second">
			<input type="input" className="form-control" name = "confirm" placeholder="Floor:"/>
			<i className="confirm fas fa-check" onClick = {props.confirm}></i>
		</div>;
		secondCount = secondCount - 1;
	}

	while (thirdCount !== 0) {
		third.push(human);
		floorThird = 	
		<div className = "floorCheck third">
			<input type="input" className="form-control" name = "confirm" placeholder="Floor:"/>
			<i className="confirm fas fa-check" onClick = {props.confirm}></i>
		</div>;
		thirdCount = thirdCount - 1;
	}

	return (
		<div className = 'display bShadow-6'>
			<h1>Display</h1>
			<div className = 'position'>
				<div className = 'row'>
				<div className = 'col-4 lane start'>
					<Motion 
						defaultStyle = {{y: props.defaultStyle, opacity: 0}} 
						style = {{y: spring(props.style), opacity: 1}}
					>
						{(style) => (
							<div className = 'elevator' 
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
					<div className = 'col-4 floors'>
						{first}
					</div>
					<div className = 'col-5 add'>
						<i className="first fas fa-plus-circle" onClick = {props.clicked}></i>
						{floorFirst}
					</div>
				</div>
				<div className = 'row'>
					<div className = 'col-4 lane' />
					<div className = 'col-4 floors'>
						{second}
					</div>
					<div className = 'col-5 add'>
						<i className="second fas fa-plus-circle" onClick = {props.clicked}></i>
						{floorSecond}
					</div>
				</div>
				<div className = 'row'>
					<div className = 'col-4 lane' />
					<div className = 'col-4 floors'>
						{third}
					</div>
					<div className = 'col-5 add'>
						<i className="third fas fa-plus-circle" onClick = {props.clicked}></i>
						{floorThird}
					</div>
				</div>				
			</div>
			<div className = 'execute'>
				<button className="btn btn-lg btn-info bShadow-4" type="submit" onClick = {props.drop}>Execute</button>
			</div>
		</div>
	);
}

export default display;