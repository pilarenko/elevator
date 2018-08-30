import React, {
	Component
} from 'react';
import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import Display from '../../components/Display/Display';
import Footer from '../../components/Footer/Footer';
import Control from '../../components/Control/Control';

class App extends Component {
	state = {
		number: 0,
		text: "At your service",
		position: {
			defaultStyle: 250,
			style: 250,
		},
		passengers: {
			first: 0,
			second: 0,
			third: 0,
		},
		elevator: 0,
		order: [],
		drop: {
			first: 0,
			second: 0,
			third: 0,
		},
		upwards: true,
	};

	addQueueClick = (event) => {
		const target = event.target.classList[0];
		let passengersState = {
			first: 0,
			second: 0,
			third: 0,
		};

		if (this.state.passengers[target] < 3) {
			passengersState[target] += 1;
		} else {
			const alert = document.getElementsByClassName("alert")[0];
			const alertText = document.getElementsByClassName("alertText")[0];
			alertText.innerText = "You cannot add more people!";	
			alert.style.display="inherit";

			setTimeout(() => {
				alert.classList.add("fadeOut");
			}, 3000);

			setTimeout(() => {
				alert.style.display="none";
				alert.classList.remove("fadeOut");
			}, 3100);
		}

		this.setState({
			passengers: {
				first: this.state.passengers.first + passengersState["first"],
				second: this.state.passengers.second + passengersState["second"],
				third: this.state.passengers.third + passengersState["third"],
			}
		})
	}

	loadPassengers = (event) => {

		function countInArray(array, int) {
			let count = 0;
			for (let i = 0; i < array.length; i++) {
				if (array[i] === int) {
					count+=1;
				}
			}
			return count;
		}

		function sumOfArray(array) {
			let sum = 0;
			for (let i = 0; i < array.length; i++) {
				sum += array[i];
			}
			return sum;
		}

		const floorName = event.target.parentElement.classList[1];
		const floor = ["first", "second", "third"].reverse();
		let elevatorCount = this.state.elevator;
		let currentFloor = this.state.number;
		let unsortedOrder = [...this.state.order];
		let pickUpFloor = floor.indexOf(event.target.parentElement.classList[1]);

		if ((event.target.previousSibling.value >= 0) && (event.target.previousSibling.value <= 2))	{	
			if (event.target.parentElement.classList[1] === "third") {
				unsortedOrder.push(parseInt(event.target.previousSibling.value, 10));
			} else {
				unsortedOrder.push(parseInt(event.target.previousSibling.value, 10), pickUpFloor);
			}
		} else {
			const alert = document.getElementsByClassName("alert")[0];
			const alertText = document.getElementsByClassName("alertText")[0];
			alertText.innerText = "Type correct value!";	
			alert.style.display="inherit";

			setTimeout(() => {
				alert.classList.add("fadeOut");
			}, 3000);

			setTimeout(() => {
				alert.style.display="none";
				alert.classList.remove("fadeOut");
			}, 3100);
		}
		let floorState = {
			first: 0,
			second: 0,
			third: 0,
		};

		let passState = {
			first: 0,
			second: 0,
			third: 0,
		};
		
		if (floor[currentFloor] === event.target.parentElement.classList[1]) {
			elevatorCount += 1;
			passState[floorName] += 1;
		}

		console.log("unsortedOrder:");
		console.log(unsortedOrder);
		floorState[floor[event.target.previousSibling.value]] += 1;
		let uniqueOrder = [...new Set(unsortedOrder)];
		console.log("uniqueOrder:");
		console.log(uniqueOrder);
		if ((uniqueOrder[uniqueOrder.length] === 0) || (sumOfArray(unsortedOrder) >= 4)) {
			uniqueOrder = [...new Set(unsortedOrder)].sort();
		}
		if ((unsortedOrder[0] === 0) || (countInArray(unsortedOrder, 0) > 1) || (countInArray(unsortedOrder, 1) > 1) || (countInArray(unsortedOrder, 2) > 1)) {
			uniqueOrder = [...new Set(unsortedOrder)].sort((a, b) => b - a);			
			console.log("Tutaj");
		} 
		console.log("uniqueOrder2:");
		console.log(uniqueOrder);
		this.setState({
			elevator: elevatorCount,
			order: uniqueOrder,
			drop: {
				first: this.state.drop.first + floorState["first"],
				second: this.state.drop.second + floorState["second"],
				third: this.state.drop.third + floorState["third"],
			},
			passengers: {
				first: this.state.passengers.first - passState["first"],
				second: this.state.passengers.second - passState["second"],
				third: this.state.passengers.third - passState["third"],
			}
		});
	}

	dropPassengers = (event) => {
		setTimeout(() => {
			let order = [...this.state.order];
			const floors = ["third", "second", "first"];
			const orderSum = order.reduce(function(acc, val) {
				return acc + val;
			}, 0);

			let iterationDelays = Array(order.length).fill(1);
			if (orderSum > 2) {
				for (var j = 1; j < iterationDelays.length; j++) {
					iterationDelays[j] = iterationDelays[j - 1] + 3;
				}
			}

			for (var i = 0; i < order.length; i++) {
				let delay = (this.state.upwards ? 250 : 750);
				let currentFloor = 0;
				if (i !== 0) {
					currentFloor = order[i - 1];
				} else {
					currentFloor = this.state.number;
				}
				let toPickUp = 0;
				toPickUp = this.state.passengers[floors[currentFloor]];
				let floorDif = order[i] - currentFloor;

				if (floorDif > 0) {
					setTimeout(() => {
						this.setState({
							text: "Going up",
						});
					}, delay * iterationDelays[i]);

					let tempPassState = {
						first: 0,
						second: 0,
						third: 0,
					};

					let x = 90 * floorDif;
					tempPassState[floors[currentFloor]] = this.state.passengers[floors[currentFloor]];

					setTimeout(() => {
						this.setState({
							elevator: this.state.elevator + toPickUp,
							number: this.state.number + floorDif,
							position: {
								defaultStyle: this.state.position.defaultStyle - x,
								style: this.state.position.style - x,
							},
							passengers: {
								first: this.state.passengers.first - tempPassState.first,
								second: this.state.passengers.second - tempPassState.second,
								third: this.state.passengers.third - tempPassState.third,
							},
						});
					}, delay * 2 * iterationDelays[i]);

					let tempDropState = {
						first: 0,
						second: 0,
						third: 0,
					};

					tempDropState[floors[order[i]]] += this.state.drop[floors[order[i]]];
					console.log("tempDropState: ");
					console.table(tempDropState);

					setTimeout(() => {
						this.setState({
							text: "Unloading / Picking up",
							elevator: this.state.elevator - tempDropState.first - tempDropState.second - tempDropState.third,
							drop: {
								first: this.state.drop.first - tempDropState.first,
								second: this.state.drop.second - tempDropState.second,
								third: this.state.drop.third - tempDropState.third,
							},
						})
					}, delay * 5 * iterationDelays[i]);

				} else {
					this.setState({
						upwards: false,
					});
					delay = (this.state.upwards ? 250 : 750);

					setTimeout(() => {
						this.setState({
							text: "Going down",
							elevator: this.state.elevator + toPickUp,
							position: {
								defaultStyle: this.state.position.defaultStyle - x,
								style: this.state.position.style - x,
							},
							passengers: {
								first: this.state.passengers.first - tempPassState.first,
								second: this.state.passengers.second - tempPassState.second,
								third: this.state.passengers.third - tempPassState.third,
							},
						});
					}, delay * 3 * iterationDelays[i]);

					let x = 90 * floorDif;

					let tempPassState = {
						first: 0,
						second: 0,
						third: 0,
					};

					tempPassState[floors[currentFloor]] = this.state.passengers[floors[currentFloor]];

					let tempDropState = {
						first: 0,
						second: 0,
						third: 0,
					};

					// console.log("floors[currentFloor]: " + floors[currentFloor]);
					tempDropState[floors[order[i]]] += this.state.drop[floors[order[i]]];
					console.log("tempDropState: ");
					console.table(tempDropState);
					console.log("toPickUp: " + toPickUp);

					setTimeout(() => {
						this.setState({
							number: this.state.number + floorDif,
							text: "Unloading / Picking Up",
							elevator: this.state.elevator - tempDropState.first - tempDropState.second - tempDropState.third,
							drop: {
								first: this.state.drop.first - tempDropState.first,
								second: this.state.drop.second - tempDropState.second,
								third: this.state.drop.third - tempDropState.third,
							},
						})
					}, delay * 5 * iterationDelays[i]);

					setTimeout(() => {
						if ((this.state.number === 0) || (i === order.length)) {
							this.setState({
								text: "At your service",
								order: [],
							});
						}
					}, delay * 8 * iterationDelays[i]);
				}
			}

		}, 1000);

	}

	render() {
		const fontStyle = {
			fontFamily: 'sunrise',
		};

		const dispStyle = {
			padding: '.5rem 1rem',
			paddingTop: '0.5rem',
			paddingRight: '1rem',
			paddingBottom: '0.5rem',
			paddingLeft: '1rem',
		}

		return ( <
			div className = 'container-fluid'
			style = {
				fontStyle
			} >
			<
			Navbar / >
			<
			div className = 'row content'
			style = {
				dispStyle
			} >
			<
			div className = "col-8" >
			<
			Display defaultStyle = {
				this.state.position.defaultStyle
			}
			style = {
				this.state.position.style
			}
			clicked = {
				this.addQueueClick
			}
			passengers = {
				this.state.passengers
			}
			elevator = {
				this.state.elevator
			}
			confirm = {
				this.loadPassengers
			}
			drop = {
				this.dropPassengers
			}
			/> < /
			div > <
			div className = "col-4 cleared" >
			<
			Control text = {
				this.state.text
			}
			number = {
				this.state.number
			}
			/> < /
			div > <
			/div> <
			div className = 'row'
			style = {
				dispStyle
			} >
			<
			Footer / >
			<
			/div> < /
			div >
		);
	}
}

export default App;