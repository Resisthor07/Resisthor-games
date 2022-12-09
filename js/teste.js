const dadosRece = fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}).then((response) => {
    response.json().then(dados => {
        dadosServidor = dados;
        carregarMais(dadosServidor, filtro);
    });
}).catch((err) => {
    console.log("Erro!");
});

let dadosServidor = [];
let botaoCarregar = document.getElementById("carregar-mais");
let botaoRemover = document.getElementById("remover");
let botaoRemoverTudo = document.getElementById("remover-tudo");
let primeiroCarregamento = true;
let controle = 0;
let filtro = "shooter";

botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor, filtro, true) });
botaoRemover.addEventListener("click", () => limparTela(false));
botaoRemoverTudo.addEventListener("click", () => limparTela(true));

//botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor, filtro, true) });

// function buscaAPIRafael() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'e078caf048msh54b295ff558ce1cp14c4e7jsncbf5f00838c0',
//             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };

//     fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plataformaRafael}`, options)
//         .then((response) => {
//             response.json()
//                 .then(lista => console.log(lista));
//         })
//         .catch((err) => console.log(err));

// }