const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: []
		},
		actions: {
			planetsInfoGatherer: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						let planetsContent = responseAsJson.results;
						console.log(planetsContent);
						getActions().setPlanets(planetsContent);
						// console.log(getStore().planets);
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			setPlanets: x => {
				x.map((planet, index) => {
					getStore().planets.push({
						name: planet.name,
						climate: planet.climate,
						diameter: planet.diameter,
						population: planet.population,
						terrain: planet.terrain
					});
					console.log(getStore().planets);
				});
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
