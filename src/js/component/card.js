import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export const Cardstarwars = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-columns">
			{store.people.map((item, index) => {
				return (
					<div className="card" key={index}>
						<img
							className="card-image"
							src="https://www.google.es/url?sa=i&url=https%3A%2F%2Fwww.muyinteresante.es%2Fcultura%2Farte-cultura%2Ftest%2Fcuanto-sabes-de-star-wars&psig=AOvVaw0aexuo_2WywgKwkEFsyQw2&ust=1604527411267000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCeisaw5-wCFQAAAAAdAAAAABAD"
							alt="Star Wars"
						/>
						<div className="card-body">
							<ul className="card-text">
								<li>
									<span>Name: {item.name}</span>
								</li>
								<li>
									<span>Mass: {item.mass}</span>
								</li>
								<li>
									<span>Gender: {item.gender}</span>
								</li>
								<li>
									<span>Height: {item.height}</span>
								</li>
								<li>
									<span>Skin: {item.skin_color}</span>
								</li>
								<li>
									<span>Eye Color: {item.eye_color}</span>
								</li>
							</ul>
						</div>
						<div className="card-footer" />
					</div>
				);
			})}
		</div>
	);
};
