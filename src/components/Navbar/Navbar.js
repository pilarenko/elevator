import React from 'react';
// import classes from './Navbar.css';
import './Navbar.css';

const navbar = (props) => {
	return (
		<div className = 'navbar'>
			<nav className = "navbar navbar-default navbar-expand-lg navbar-light">
				<div className = 'row'>
					<div className="col-8">
						<a className = "navbar-brand active"><h1><span id = "level">Elevelator</span></h1></a>
					</div>
						<div className="col-4 social">
							<ul className="nav navbar-nav navbar-right ml-auto">
								<li className="nav-item"><a href="https://github.com/pilarenko" className="nav-link"><i className="fab fa-github"></i></a></li>
								<li className="nav-item"><a href="https://www.linkedin.com/in/adrian-pilarczyk-b37695167/" className="nav-link"><i className="fab fa-linkedin-in"></i></a></li>
								<li className="nav-item"><a href="https://twitter.com/Pilarenko" className="nav-link"><i className="fab fa-twitter"></i></a></li>
								<li className="nav-item"><a href="https://www.facebook.com/adrian.pilarczyk.3" className="nav-link"><i className="fab fa-facebook-f"></i></a></li>
							</ul>
						</div>
				</div>
			</nav>
		</div>
	);
}

export default navbar;