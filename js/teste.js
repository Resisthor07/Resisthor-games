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
let adicaoDeElementosSamir = false;
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

//botaoCarregar.addEventListener("click", (dados) => { carregarMais(dadosServidor, filtro, true) });
botaoRemover.addEventListener("click", () => limparTela());







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


function selecionaOpcRafael(opc) {
    if (controladorRafael == opc) {
        mudaEstiloRafael(opc);
        controladorRafael = -1;
        boolRafael = 0;
        return;
    }



    if (opc == 0) {
        controladorRafael = opc;
        plataformaRafael = "pc";
        mudaEstiloRafael(opc);

        if (boolRafael == 1 && boolEduardo == 1) {
            filtroTailyne();
            return;
        }

        buscaAPIRafael();
        boolRafael = 1;
        return;
    }
    if (opc == 1) {
        controladorRafael = opc;
        plataformaRafael = "browser";
        mudaEstiloRafael(opc);

        if (boolRafael == 1 && boolEduardo == 1) {
            filtroTailyne();
            return;
        }

        buscaAPIRafael();
        boolRafael = 1;
        return;
    }
    if (opc == 2) {
        controladorRafael = opc;
        plataformaRafael = "all";
        mudaEstiloRafael(opc);

        if (boolRafael == 1 && boolEduardo == 1) {
            filtroTailyne();
            return;
        }

        buscaAPIRafael();
        boolRafael = 1;
        return;
    }
    if (opc == 3) {
        controladorRafael = -1;
        console.log("entrou");
        mudaEstiloRafael(opc);

        openPopupFavorites();

        boolRafael = 0;
        return;
    }
}

function mudaEstiloRafael(id) {
    let e;
    for (e = 0; e < 3; e++) {
        if (e == id) {
            elementosRafael[e].classList.toggle("botao-ativo");
            elementosRafael[e].classList.toggle("botao-padrao");
        }
        else {
            if (elementosRafael[e].classList.contains("botao-padrao")) {
                continue;
            }
            else {
                elementosRafael[e].classList.toggle("botao-padrao");
                elementosRafael[e].classList.toggle("botao-ativo");
            }
        }
    }

    if (e == id) {
        elementosRafael[e].classList.toggle("botao-favorito-ativo");
        elementosRafael[e].classList.toggle("botao-favorito-padrao");
    }
    else {
        if (elementosRafael[e].classList.contains("botao-favorito-padrao")) {
            return;
        }
        else {
            elementosRafael[e].classList.toggle("botao-favorito-padrao");
            elementosRafael[e].classList.toggle("botao-favorito-ativo");
        }
    }
}

function buscaAPIRafael() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e078caf048msh54b295ff558ce1cp14c4e7jsncbf5f00838c0',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plataformaRafael}`, options)
        .then((response) => {
            response.json()
                .then(lista => console.log(lista));
        })
        .catch((err) => console.log(err));

}

elementosRafael[0].addEventListener("click", () => selecionaOpcRafael(0));

elementosRafael[1].addEventListener("click", () => selecionaOpcRafael(1));

elementosRafael[2].addEventListener("click", () => selecionaOpcRafael(2));

elementosRafael[3].addEventListener("click", () => selecionaOpcRafael(3));
