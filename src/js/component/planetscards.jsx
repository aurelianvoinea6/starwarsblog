import React, { useContext } from "react";

import { Context } from "../store/appContext.js";

import demo from "../../styles/demo.scss";

export const MyCardCreator = props => {
	const { store, actions } = useContext(Context);
	const cards = store.planets.map((planet, index) => (
		<div className="card card-styling-class" key={index}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/4/46/Trantor-Coruscant.jpg"
				className="card-img-top"
				alt="planets img"
			/>
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{planet.name}</h5>
				<p className="card-text mb-0">{planet.climate}</p>
				<p className="card-text my-0">{planet.terrain}</p>
				<p className="card-text my-0">{planet.diameter}</p>
				<p className="card-text my-0">{planet.population}</p>
				<a href="#" className="btn btn-primary m-auto">
					More info
				</a>
			</div>
		</div>
	));
	return cards;
};
