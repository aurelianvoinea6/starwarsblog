import React from "react";
import "../../styles/home.scss";
import { CardStarwars } from "../component/card.js";

export const Home = () => (
	<div className="text-center mt-5">
		<CardStarwars />
	</div>
);
