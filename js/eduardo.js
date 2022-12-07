//fetch("https://www.freetogame.com/api/games");

let decimoItem=0;
botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor, filtro) });
let menu;
let boolEduardo;


let divBot =[
	document.getElementById("action"),
	document.getElementById("battle"),
	document.getElementById("fight"),
	document.getElementById("racing"),
	document.getElementById("sci"),
	document.getElementById("shooting"),
	document.getElementById("sports"),
	document.getElementById("strategy")
];

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

let botHome = document.getElementById("bot_home");
botHome.addEventListener("click", () => selecionaFiltro(9));

let divHome = document.getElementById("area_home");


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
        estilizaBotao(opc-1);
        selecionaOpc(1);
        return;
    }
    if(opc==2)
    {
        menu = "Battle-Royale";
        estilizaBotao(opc-1);
        selecionaOpc(1);
        return;
    }
    if(opc==3)
    {
        menu = "fighting";
        estilizaBotao(opc-1);
        selecionaOpc(1);
        return;
    }
	if(opc==4)
    {
        menu = "racing";
        estilizaBotao(opc-1);
        selecionaOpc(1);
        return;
    }
	if(opc==5)
    {
        menu = "sci-fi";
        estilizaBotao(opc-1);
        selecionaOpc(1);
        return;
    }
    if(opc==6)
    {
        menu = "shooter";
        estilizaBotao(opc-1);
        selecionaOpc(1);
        return;
    }
    if(opc==7)
    {
        menu = "sports";
        estilizaBotao(opc-1);
        selecionaOpc(1);
        return;
    } 
    if(opc==8)
    {
        menu = "strategy";
        estilizaBotao(opc-1);
        selecionaOpc(1);
        return;
    }
    if(opc==9){
        estilizaBotao(opc-1);
        selecionaOpc(9);
        return;
    }
    
}

function selecionaOpc(opc){
	const options = {
		
		method: 'GET',
		
		headers: {
			'X-RapidAPI-Key': '6180cc780dmshc10d83878e62d71p104deejsn359ac2c41450',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
		}
	};
    if(opc==1){
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${menu}`, options)
		.then(response => response.json())
		.then(response => console.log(response))
	    .catch(err => console.error(err));
        return;
    }
    if(opc==9){
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity`, options)
	    .then(response => response.json())
	    .then(response => console.log(response))
	    .catch(err => console.error(err));
        return;
    }
}


function estilizaBotao(opcBot){
    let i=0;

    for (i=0; i<8;i++){
        if (i == opcBot){
            botao[i].classList.toggle("botao_menu-ativo");
            botao[i].classList.toggle("botao_menu");
            divBot[i].classList.toggle("botao_menu-ativo");
            divBot[i].classList.toggle("botao_menu");


        }else{
            if(botao[i].classList.contains("botao_menu")){
                continue;
            }else{
                botao[i].classList.toggle("botao_menu-ativo");
                botao[i].classList.toggle("botao_menu");
                divBot[i].classList.toggle("botao_menu-ativo");
                divBot[i].classList.toggle("botao_menu");
            }
        }

    }

    if (opcBot==8){
        botHome.classList.toggle("home");
        botHome.classList.toggle("home-ativo");
        divHome.classList.toggle("div_home");
        divHome.classList.toggle("div_home-ativo");
    }else
    {
        if(botHome.classList.contains("home")){
            return;
        }else{
            botHome.classList.toggle("home");
            botHome.classList.toggle("home-ativo");   
            divHome.classList.toggle("div_home");
            divHome.classList.toggle("div_home-ativo");
        }
    }
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