import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const locateIndex = () => {
		let result = "";
		for (let i = 0; i < store.planets.length; i++) {
			if (store.planets[i].name == params.theid) {
				result = store.planets[i];
			}
		}
		return result;
	};
	console.log(locateIndex());
	return (
		<div className="jumbotron">
			<h1 className="display-4">{params.theid}</h1>

			<p>Terrain type : {locateIndex().terrain}</p>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

// Planets.propTypes = {
// 	match: PropTypes.object
// };
