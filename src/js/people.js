import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const locateIndex = () => {
		let result = "";
		for (let i = 0; i < store.people.length; i++) {
			if (store.people[i].name == params.theid) {
				result = store.people[i];
			}
		}
		return result;
	};
	console.log(locateIndex());
	return (
		<div className="jumbotron">
			<h1 className="display-4">{params.theid}</h1>

			<p>Character : {locateIndex().character}</p>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Home
				</span>
			</Link>
		</div>
	);
};

