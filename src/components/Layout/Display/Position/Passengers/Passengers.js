import React from 'react';

import classes from './Passengers.css';

const passengers = (props) => {
	let passengersData = {
		first: {
			count: props.passengers.first,
			floor: "",
		},
		second: {
			count: props.passengers.second,
			floor: "",
		},
		third: {
			count: props.passengers.third,
			floor: "", 
		},
	};

	if (passengersData.first.count !== 0) {
		passengersData.first.floor =
		<div className = {classes.floorCheck}>
			<input type="input" className={classes.passengersInput} name = "first" placeholder="Floor"/>
			<i className={["fas fa-check", classes.confirm].join(" ")} onClick = {props.confirm}></i>
		</div>;
	}

	if (passengersData.second.count !== 0) {
		passengersData.second.floor =
		<div className = {classes.floorCheck}>
			<input type="input" className={classes.passengersInput} name = "second" placeholder="Floor"/>
			<i className={["fas fa-check", classes.confirm].join(" ")} onClick = {props.confirm}></i>
		</div>;
	}

	if (passengersData.third.count !== 0) {
		passengersData.third.floor =
		<div className = {classes.floorCheck}>
			<input type="input" className={classes.passengersInput} name = "third" placeholder="Floor"/>
			<i className={["fas fa-check", classes.confirm].join(" ")} onClick = {props.confirm}></i>
		</div>;
	}

	return (
			<div className={classes.passengers}>
				<div className={classes.passengersFloor}>
					<i className={["fas fa-plus-circle", classes.plus].join(" ")} name = "first" onClick = {props.clicked}></i>
					{passengersData.first.floor}
				</div>
				<div className={classes.passengersFloor}>
					<i className={["fas fa-plus-circle", classes.plus].join(" ")} name = "second" onClick = {props.clicked}></i>
					{passengersData.second.floor}
				</div>
				<div className={classes.passengersFloor}>
					<i className={["fas fa-plus-circle", classes.plus].join(" ")} name = "third" onClick = {props.clicked}></i>
					{passengersData.third.floor}
				</div>
			</div>
	);
}

export default passengers;

