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

let listaExibida = document.getElementById("principal");

let listaContainerDeJogos = [];

let dadosServidor = [];
let botaoCarregar = document.getElementById("carregar-mais");
let botaoRemover = document.getElementById("remover");
let primeiroCarregamentoImagem = true;
let controle = 0;
let filtro = "nenhum";

botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor, filtro) });
botaoRemover.addEventListener("click", limparTela);

function carregarMais(dados, filtro) {

    let containerDeJogos = {
        jogos: document.createElement("div"),
        linhaJogos: []
    }

    let stringHtml = "";

    listaExibida.appendChild(containerDeJogos.jogos);
    containerDeJogos.jogos.className = "lista-jogos";

    if (primeiroCarregamentoImagem) {
        let imagemBanner = document.getElementById("samir-imagem-principal");
        imagemBanner.innerHTML = `<img src="${dados[controle].thumbnail}" alt="${dados[controle].title}"/>`;
        primeiroCarregamentoImagem = false;
        controle++;
    }

    for (i = 0; i < 3 && controle < dados.length; i++) {

        // let linhaJogos = {
        //     tituloGenero: document.createElement("h3"),
        //     listaNaoOrdenada: document.createElement("ul")
        // };

        // containerDeJogos.jogos.appendChild(linhaJogos.tituloGenero);
        // containerDeJogos.jogos.appendChild(linhaJogos.listaNaoOrdenada);
        // linhaJogos.tituloGenero.innerText = dados[i].genre;

        controle += 3;

        let stringLinhas = "";

        for (j = 1; j <= 3; j++) {

            stringLinhas += `
                            <li><img src="${dados[controle + j].thumbnail}" alt="${dados[controle + j].title}"><small>${dados[controle + j].title}</small></li>
                            `;
        }

        // linhaJogos.listaNaoOrdenada.innerHTML = stringLinhas;

        stringHtml += `<h3>${dados[i].genre}</h3>
                      <ul>${stringLinhas}</ul>`;

        // containerDeJogos.linhaJogos.push(linhaJogos);
    }

    containerDeJogos.jogos.innerHTML = stringHtml;

    listaContainerDeJogos.push(containerDeJogos);

    console.log(listaContainerDeJogos);
}

function limparTela() {

    listaExibida.removeChild(listaContainerDeJogos[listaContainerDeJogos.length - 1].jogos);
    listaContainerDeJogos.pop();
    controle = 0;

}