import React from 'react';
import classes from './Navbar.css';

const navbar = (props) => {
	return (
		<ul className = {classes.navbar}>
			<h1 className = {classes.heading}>Elevelator</h1>
			<div className={classes.links}>
				<li id = "github">
					<a className={classes.link} href="https://github.com/pilarenko"><i className={"fab fa-github"}></i></a>
				</li>
				<li id = "linkedin">
					<a className={classes.link} href="https://www.linkedin.com/in/adrian-pilarczyk-b37695167/"><i className="fab fa-linkedin-in"></i></a>
				</li>
			</div>
		</ul>
	);
}

export default navbar;