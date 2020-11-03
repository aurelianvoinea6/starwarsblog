import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";

export const NavbarComponent = () => {
	// <Link to="/demo">
	// 			<button className="btn btn-primary">Check the Context in action</button>

	// 		</Link>
	return (
		<Navbar expand="lg" variant="light" bg="light">
			<Navbar.Brand href="#">Star Wars</Navbar.Brand>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Navbar>
	);
};
