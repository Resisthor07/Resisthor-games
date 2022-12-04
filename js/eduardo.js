//fetch("https://www.freetogame.com/api/games");

let tipoCategoria = document.getElementById("acao");
let acao = 'shooter';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59aba074b0msh4dcbc270724c3f0p164e04jsn23fd06b88edb',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};


fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

