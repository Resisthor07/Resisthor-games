//fetch("https://www.freetogame.com/api/games");

botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor, filtro) });

let varAcao;
let acao=0;
let decimoItem=0;

let botao =[
	document.getElementById("bot_action"),
	document.getElementById("bot_battle"),
	document.getElementById("bot_figtht"),
	document.getElementById("bot_racing"),
	document.getElementById("bot_sci"),
	document.getElementById("bot_shooting"),
	document.getElementById("bot_sports"),
	document.getElementById("bot_strategy")
];


botao[0].addEventListener("click", () => selecionaFiltro(1));
botao[1].addEventListener("click", () => selecionaFiltro(2));
botao[2].addEventListener("click", () => selecionaFiltro(3));
botao[3].addEventListener("click", () => selecionaFiltro(4));
botao[4].addEventListener("click", () => selecionaFiltro(5));
botao[5].addEventListener("click", () => selecionaFiltro(6));
botao[6].addEventListener("click", () => selecionaFiltro(7));
botao[7].addEventListener("click", () => selecionaFiltro(8));


function selecionaFiltro(opc)
{
    if(opc==1)
    {
        menu = "action";
        selecionaOpc();
        return;
    }
    if(opc==2)
    {
        menu = "Battle-Royale";
        selecionaOpc();
        return;
    }
    if(opc==3)
    {
        menu = "fighting";
        selecionaOpc();
        return;
    }
	if(opc==4)
    {
        menu = "racing";
        selecionaOpc();
        return;
    }
	if(opc==5)
    {
        menu = "sci-fi";
        selecionaOpc();
        return;
    }
    if(opc==6)
    {
        menu = "shooter";
        selecionaOpc();
        return;
    }
    if(opc==7)
    {
        menu = "sports";
        selecionaOpc();
        return;
    } if(opc==8)
    {
        menu = "strategy";
        selecionaOpc();
        return;
    }
    
    
}

function selecionaOpc(){
	
	const options = {
		
		method: 'GET',
		
		headers: {
			'X-RapidAPI-Key': '6180cc780dmshc10d83878e62d71p104deejsn359ac2c41450',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
		}
	};

	fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${menu}`, options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

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