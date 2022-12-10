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

let dadosServidorHome;
let listaExibida = document.getElementById("principal");
let containerDeJogos = document.createElement("div");
listaExibida.appendChild(containerDeJogos);

let dadosServidor = [];
let botaoCarregar = document.getElementById("carregar-mais");
let botaoRemover = document.getElementById("remover");
let botaoRemoverTudo = document.getElementById("remover-tudo");
let primeiroCarregamento = true;
let controleSamir = 0;
let filtro = "shooter";
let botoesFavoritos = [];

botaoRemover.addEventListener("click", () => limparTela());
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