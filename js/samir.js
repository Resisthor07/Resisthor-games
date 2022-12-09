let jogosCarregados;

function carregarMais(dados, filtro) {

    let stringHtml = `<h3>${filtro} ${menu}</h3>`;
    let stringLinhas = "";

    containerDeJogos.className = "lista-jogos";

    if (primeiroCarregamento) {

        let imagemBanner = document.getElementById("samir-imagem-principal");
        imagemBanner.innerHTML = `<img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}"/>`;
        controleSamir++;

        for (i = 0; i < 9 && controleSamir < dados.length; i++) {

            controleSamir++;
            stringLinhas += `
                            <li>
                                <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}">
                                <small>${dados[controleSamir].title}</small>
                            </li>
                            `;
        }


    }


    if (!primeiroCarregamento) {

        let stringTemp = jogosCarregados.innerHTML;

        for (i = 0; i < 10; i++) {

            controleSamir++;
            stringLinhas += `
                                <li>
                                    <img src="${dados[controleSamir].thumbnail}" alt="${dados[controleSamir].title}">
                                    <small>${dados[controleSamir].title}</small>
                                </li>
                                `;

        }
        stringTemp += stringLinhas;

        jogosCarregados.innerHTML = stringTemp;
    }

    if (primeiroCarregamento) {
        stringHtml += `<ul id="jogos-carregados">${stringLinhas}</ul>`;
        containerDeJogos.innerHTML = stringHtml;
        jogosCarregados = document.getElementById("jogos-carregados");
        primeiroCarregamento = false;
    }
}

function limparTela() {

    controleSamir = 0;
    primeiroCarregamento = true;
    containerDeJogos.innerHTML = "";

}