//fetch("https://www.freetogame.com/api/games");

botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor, filtro) });

let varAcao;
let acao=0;
let decimoItem=0;

let bot_action = document.getElementById("bot_action");
bot_action = addEventListener ('click', selecionaAcao);


let bot_battle = document.getElementById("bot_battle");
bot_battle = addEventListener ('click', batalha);

let bot_figtht = document.getElementById("bot_figtht");
bot_figtht = addEventListener ('click', luta);

let bot_racing = document.getElementById("bot_racing");
bot_racing = addEventListener ('click', corrida);

let bot_sci = document.getElementById("bot_sci");
bot_sci = addEventListener ('click', sci);

let bot_shooting = document.getElementById("bot_shooting");
bot_shooting = addEventListener ('click', tiro );

let bot_sports = document.getElementById("bot_sports");
bot_sports = addEventListener ('click', esportes);

let bot_strategy = document.getElementById("bot_strategy");
bot_strategy = addEventListener ('click', estrategia );



function selecionaAcao(){
	
	fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=action', {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}).then((response) => {
    response.json().then(dados => {
        varAcao = dados;
        carregarMais(varAcao, filtro);
    });
}).catch((err) => {
    console.log("Erro!");
});

}

function batalha(){

	fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=Battle-Royale', {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}).then((response) => {
    response.json().then(dados => {
        varAcao = dados;
        carregarMais(varAcao, filtro);
    });
}).catch((err) => {
    console.log("Erro!");
});

}


function luta(){

	fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=fighting', {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}).then((response) => {
    response.json().then(dados => {
        varAcao = dados;
        carregarMais(varAcao, filtro);
    });
}).catch((err) => {
    console.log("Erro!");
});

}

function corrida(){

	fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing', {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}).then((response) => {
    response.json().then(dados => {
        varAcao = dados;
        carregarMais(varAcao, filtro);
    });
}).catch((err) => {
    console.log("Erro!");
});

}

function sci(){

	fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=sci-fi', {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}).then((response) => {
    response.json().then(dados => {
        varAcao = dados;
        carregarMais(varAcao, filtro);
    });
}).catch((err) => {
    console.log("Erro!");
});

}


function tiro(){

	fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}).then((response) => {
    response.json().then(dados => {
        varAcao = dados;
        carregarMais(varAcao, filtro);
    });
}).catch((err) => {
    console.log("Erro!");
});

}

function esportes(){ 
fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=sports', {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}).then((response) => {
    response.json().then(dados => {
        varAcao = dados;
        carregarMais(varAcao, filtro);
    });
}).catch((err) => {
    console.log("Erro!");
});

}

function estrategia(){ 
	fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=strategy', {
		method: "GET",
		headers: {
			'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
		}
	}).then((response) => {
		response.json().then(dados => {
			varAcao = dados;
			carregarMais(varAcao, filtro);
		});
	}).catch((err) => {
		console.log("Erro!");
	});
	
}

/*
fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}).then((response) => {
    response.json().then(dados => {
        varAcao = dados;
        carregarMais(varAcao, filtro);
    });
}).catch((err) => {
    console.log("Erro!");
});*/