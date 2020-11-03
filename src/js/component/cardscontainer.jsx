import React, { useState, useEffect, useContext } from "react";

import { MyCardCreator } from "./planetscards.jsx";

import demo from "../../styles/demo.scss";

export const CardsContainer = () => {
	return (
		<div className="cards-container-styling">
			<MyCardCreator />
		</div>
	);
};
