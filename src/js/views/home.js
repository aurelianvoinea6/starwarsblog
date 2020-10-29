import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { MyCardCreator } from "../component/planetscards.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<MyCardCreator />
	</div>
);
