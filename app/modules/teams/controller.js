import Character from './Character';

class TeamsController {

	constructor($http) {
    this._$http = $http;
		this.name = "";
		this.characters = [];
	}

  addCharacter() {
		console.log("adding")
		this._$http
		.get(`http://gateway.marvel.com:80/v1/public/characters?name=${this.name}&apikey=1c51377e8242564595ee97800ae287c7`)
		.then((response) => {
			console.log(response);
			let character = new Character(response.data.data.results[0].name, response.data.data.results[0].description, `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`);
			this.characters.push(character);
		});

  }

  deleteCharacter(character) {
		let confirmed = confirm(`Are you sure you want to delete ${character.name}?`);

		if (confirmed) {
			this.characters.splice(this.characters.indexOf(character), 1);
		}

  }

}

export default TeamsController
