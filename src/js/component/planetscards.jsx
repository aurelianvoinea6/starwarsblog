import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext.js";

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

export const MyCardCreator = () => {
	const { store, actions } = useContext(Context);

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>Some quick example text to build on the card title</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};
