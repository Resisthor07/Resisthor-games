//fetch("https://www.freetogame.com/api/games");

let bot_action = document.getElementById("bot_action");
bot_action = addEventListener ('click', );

let bot_battle = document.getElementById("bot_battle");
bot_battle = addEventListener ('click', );

let bot_figtht = document.getElementById("bot_figtht");
bot_figtht = addEventListener ('click', );

let bot_racing = document.getElementById("bot_racing");
bot_racing = addEventListener ('click', );

let bot_sci = document.getElementById("bot_sci");
bot_sci = addEventListener ('click', );

let bot_shooting = document.getElementById("bot_shooting");
bot_shooting = addEventListener ('click', );

let bot_sports = document.getElementById("bot_sports");
bot_sports = addEventListener ('click', );

let bot_strategy = document.getElementById("bot_strategy");
bot_strategy = addEventListener ('click', );


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

