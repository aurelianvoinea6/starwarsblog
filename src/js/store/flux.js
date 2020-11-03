import { useEffect, useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: []
		},
		actions: {
			getPeople: async () => {
				const data = await fetch("https://swapi.dev/api/people/");
				const user = await data.json();
				setStore({ people: user.results });
			}

			//Using the async function after a lot of faills :D
		}
	};
};

export default getState;
