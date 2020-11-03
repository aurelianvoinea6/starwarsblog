import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import { Context } from "../store/appContext.js";

export const NavbarComponent = () => {
	const { store, actions } = useContext(Context);
	const [listItem, setListItem] = useState(null);

	// const isEmpty = () => {
	// 	if (store.favorites.length == 0) {
	// 		return "empty";
	// 	} else {
	// 		setListItem(
	// 			store.favorites.map((eachFavorite, i) => {
	// 				return (
	// 					<li key={i}>
	// 						{eachFavorite}
	// 						<button
	// 							className="btn btn-outline-dark"
	// 							onClick={() => {
	// 								actions.delete();
	// 							}}>
	// 							<i className="far fa-trash-alt" />
	// 						</button>
	// 					</li>
	// 				);
	// 			})
	// 		);
	// 	}
	// };

	useEffect(() => {
		// isEmpty();
		setListItem(
			store.favorites.map((eachFavorite, i) => {
				return (
					<li key={i}>
						{eachFavorite}
						<button
							className="btn btn-outline-dark"
							onClick={() => {
								actions.delete();
							}}>
							<i className="far fa-trash-alt" />
						</button>
					</li>
				);
			})
		);
	});

	return (
		<Navbar expand="lg" variant="light" bg="light">
			<Navbar.Brand href="#">Star Wars</Navbar.Brand>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					{"Favorites " + store.favorites.length}
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">{listItem}</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Navbar>
	);
};
