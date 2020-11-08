import React, { useContext } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

import demo from "../../styles/demo.scss";

export const PeopleCard = props => {
	const { store, actions } = useContext(Context);
	const cards = store.planets.map((people, index) => (
		<div className="card card-styling-class" key={index}>
			<img
				src="https://i.blogs.es/dafdab/jar_jar_binks/450_1000.jpg"
				className="card-img-top"
				alt="people img"
			/>
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{people.name}</h5>
				<p className="card-text mb-0">{people.gender}</p>
				<p className="card-text my-0">{people.height}</p>
				<p className="card-text my-0">{ppeople.mass}</p>
				<p className="card-text my-0">{people.skin_color}</p>
				<Link to={"/people/" + people.name}>
					<button href="#" className="btn btn-primary m-auto">
						Learn more
					</button>
				</Link>

				<button onClick={() => actions.addTofavorites(people.name)} className="btn btn-primary m-auto">
					favorites
				</button>
			</div>
		</div>
	));
	return cards;
};