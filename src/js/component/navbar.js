import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import { Context } from "../store/appContext.js";

export const NavbarComponent = () => {
	const { store, actions } = useContext(Context);
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
					<Dropdown.Item href="#/action-1">
						{store.favorites.map((eachFavorite, i) => {
							return <li key={i}>{eachFavorite}</li>;
						})}
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Navbar>
	);
};
