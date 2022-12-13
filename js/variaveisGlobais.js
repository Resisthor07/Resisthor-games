/*Variaveis Globais Samir*/

const dadosRece = fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}).then((response) => {
    response.json().then(dados => {
        dadosServidor = dados;
        dadosServidorHome = dados;
        carregarMais(dadosServidor);
    });
}).catch((err) => {
    console.log("Erro!");
});

let listaDeJogosFavoritos = [];
let botoesFavoritar = [];
let adicionadoFavoritosPreenchimento = [];
let controleFav = 0;

let dadosServidorHome;
let listaExibida = document.getElementById("principal");
let containerDeJogos = document.createElement("div");
listaExibida.appendChild(containerDeJogos);

let dadosServidor = [];
let botaoCarregar = document.getElementById("carregar-mais");
// let botaoRemover = document.getElementById("remover");

let primeiroCarregamento = true;
let controleSamir = 0;
let botoesFavoritos = [];

// botaoRemover.addEventListener("click", () => limparTela());
botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor) });

/*Fim variaveis globais Samir*/

/*Variaveis globais Rafael*/

let elementosRafael =
    [
        document.getElementById("pc"),
        document.getElementById("browser"),
        document.getElementById("all"),
        document.getElementById("favoritos")
    ];

let plataformaRafael;
let boolRafael = 0;
let controladorRafael = -1;

elementosRafael[0].addEventListener("click", () => selecionaOpcRafael(0));

elementosRafael[1].addEventListener("click", () => selecionaOpcRafael(1));

elementosRafael[2].addEventListener("click", () => selecionaOpcRafael(2));

elementosRafael[3].addEventListener("click", () => selecionaOpcRafael(3));

/*Fim variaveis globais Rafael*/

/* Variaveis Globais Eduardo*/

let decimoItem=0;
let menu;
let boolEduardo;
let controlaFiltro=0;

let divBot = [
    document.getElementById("action"),
    document.getElementById("battle"),
    document.getElementById("fight"),
    document.getElementById("racing"),
    document.getElementById("sci"),
    document.getElementById("shooting"),
    document.getElementById("sports"),
    document.getElementById("strategy")
];

let botao = [
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

//Fim das Variaveis globais Eduardo

/* Variáveis globais de Tailyne */



/* Fim das variáveis de Tailyne */