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

let dadosServidor = [];
let botaoCarregar = document.getElementById("carregar-mais");
let primeiroCarregamentoImagem = true;
let controle = 0;

botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor) });

function carregarMais(dados) {

    let listaExibida = document.getElementById("principal");
    let jogos = document.createElement("div");
    listaExibida.appendChild(jogos);
    jogos.className = "lista-jogos";

    if (primeiroCarregamentoImagem) {
        let imagemBanner = document.getElementById("samir-imagem-principal");
        imagemBanner.innerHTML = `<img src="${dados[controle].thumbnail}" alt="${dados[controle].title}"/>`;
        primeiroCarregamentoImagem = false;
        controle++;
    }

    for (i = 0; i <= 3 && controle < dados.length; i++) {

        let tituloGenero = document.createElement("h3");
        let listaNaoOrdenada = document.createElement("ul");

        jogos.appendChild(tituloGenero);
        jogos.appendChild(listaNaoOrdenada);
        tituloGenero.innerText = dados[i].genre;

        for (j = 0; j < 3; j++) {

            let itemLista = document.createElement("li");
            let imagemJogo = document.createElement("img");
            let tituloPequeno = document.createElement("small");

            listaNaoOrdenada.appendChild(itemLista);
            itemLista.appendChild(imagemJogo);
            itemLista.appendChild(tituloPequeno);

            imagemJogo.setAttribute("src", dados[controle].thumbnail);
            imagemJogo.setAttribute("alt", dados[controle].title);
            tituloPequeno.innerText = dados[controle].title;

            controle++;

            if (controle <= 9 && i == 3) {
                j = 3;
            }
        }
    }
}