import React, { useState, useEffect, useContext } from "react";

import { PeopleCard } from "./peoplecards.jsx";

import demo from "../../styles/demo.scss";

export const Cards = () => {
	return (
		<div className="cards-container-styling">
			<PeopleCard />
		</div>
	);
};
