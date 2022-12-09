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
        carregarMais(dadosServidor);
    });
}).catch((err) => {
    console.log("Erro!");
});

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

botaoRemover.addEventListener("click", () => limparTela());
botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor) });

/*Fim variaveis globais Samir*/