const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: []
		},
		actions: {
			getPeople: () => {
				fetch("https://swapi.dev/api/people/", {})
					.then(response => {
						if (!response.ok) {
							throw Error("I cannot acces people");
						}

						return response.json();
					})
					.then(responseAsJson => {
						console.log(responseAsJson, "im done");
						console.log("random");

						getActions().setPeople(responseAsJson);
					})
					.catch(error => {
						/checking errors/;
						console.log(error);
					});
			},
			setPeople: characters => {
				console.log(characters, "random stuff");
				let arr = [];
				for (const key in characters) {
					//console.log(key + ":" + characters[key], "en for in");
					if (key === "results") arr = characters[key];
				}
				console.log(arr, "xd");

				arr.map((character, index) => {
					console.log(character[index], "test");
					getStore().characters.push({
						name: test[index].name
					});
				});
			},
			//-----------------------Aqui se guardan funciones que las guarda en store---------------------
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/* fetch("https://swapi.dev/api/planets/")
					.then(response => {
						if (response.ok) {
							throw new Error("I can't load characters");
						}
						return response.json();
					})
					.then(responseAsJson => {
						console.log(responseAsJson);

						setStore(responseAsJson);
					})
					.catch(error => {
						//manejo de errores
						console.log(error);
					}); */
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))  //Aqui metemos la API
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
