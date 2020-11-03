const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			favorites: []
		},
		actions: {
			planetsInfoGatherer: URL => {
				console.log(URL);
				fetch(URL)
					.then(response => {
						console.log(response);
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						let planetsContent = responseAsJson.results;
						getActions().setPlanets(planetsContent);
						if (responseAsJson.next) {
							getActions().planetsInfoGatherer(responseAsJson.next.replace(":", "s:"));
							console.log("in the next conditional");
						}
						// console.log(getStore().planets);
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			setPlanets: planetsList => {
				let formatPlantes = [];
				planetsList.map(planet => {
					let formatEachPlanet = {
						name: planet.name,
						climate: planet.climate,
						terrain: planet.terrain,
						diameter: planet.diameter,
						population: planet.population
					};
					formatPlantes.push(formatEachPlanet);
				});
				setStore({ planets: [...getStore().planets, formatPlantes].flat() });
			},
			addTofavorites: param => {
				setStore({ favorites: [...getStore().favorites, param].flat() });
				console.log(getStore().favorites);
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
