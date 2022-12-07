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
let containerDeJogos = document.createElement("div");
let jogosCarregados;

listaExibida.appendChild(containerDeJogos);

let dadosServidor = [];
let botaoCarregar = document.getElementById("carregar-mais");
let botaoRemover = document.getElementById("remover");
let botaoRemoverTudo = document.getElementById("remover-tudo");
let primeiroCarregamento = true;
let controle = 0;
let filtro = "nenhum";

botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor, filtro, true) });
botaoRemover.addEventListener("click", () => limparTela(false));
botaoRemoverTudo.addEventListener("click", () => limparTela(true));

function carregarMais(dados, filtro, adicao) {
    let stringHtml = "";
    let arredondar = true;

    containerDeJogos.className = "lista-jogos";

    if (primeiroCarregamento) {
        let imagemBanner = document.getElementById("samir-imagem-principal");
        imagemBanner.innerHTML = `<img src="${dados[controle].thumbnail}" alt="${dados[controle].title}"/>`;
        controle++;
        arredondar = false;
    }

    for (i = 0; i < 3 && controle < dados.length && !adicao; i++) {

        let stringLinhas = "";

        for (j = 1; j <= 3; j++) {
            controle++;
            stringLinhas += `
                            <li>
                                <img src="${dados[controle].thumbnail}" alt="${dados[controle].title}">
                                <small>${dados[controle].title}</small>
                            </li>
                            `;
        }

        stringHtml += `<h3>${dados[i].genre}</h3>
                      <ul>${stringLinhas}</ul>`;
    }



    if (adicao) {

        let stringLinhas = "";
        let stringTemp = jogosCarregados.innerHTML;

        for (j = 0; j < 10; j++) {

            controle++;
            stringLinhas += `
                                <li>
                                    <img src="${dados[controle].thumbnail}" alt="${dados[controle].title}">
                                    <small>${dados[controle].title}</small>
                                </li>
                                `;
        }

        stringTemp += stringLinhas;

        jogosCarregados.innerHTML = stringTemp;
    }

    if (primeiroCarregamento) {
        containerDeJogos.innerHTML = stringHtml;
        jogosCarregados = document.createElement("ul");
        containerDeJogos.appendChild(jogosCarregados);
        primeiroCarregamento = false;
    }

    //listaContainerDeJogos.push(containerDeJogos);

    console.log(containerDeJogos);
}

function limparTela(removerTudo) {

    if (!removerTudo) {
        listaExibida.removeChild(listaContainerDeJogos[listaContainerDeJogos.length - 1].jogos);
        listaContainerDeJogos.pop();
        controle = 0;
    }

    for (i = listaContainerDeJogos.length - 1; (i >= 0) && removerTudo; i--) {
        listaExibida.removeChild(listaContainerDeJogos[i].jogos);
        listaContainerDeJogos.pop();
        controle = 0;
    }
}