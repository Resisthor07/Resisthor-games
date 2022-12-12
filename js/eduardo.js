//fetch("https://www.freetogame.com/api/games");

function selecionaFiltro(opc) {

    if (controlaFiltro == opc){
        estilizaBotao(opc - 1);
        controlaFiltro = 0;
        boolEduardo=0;

        if(boolRafael == 1)
        {
            buscaAPIRafael();
            return;
        }
        
    }


    if (opc == 1) {
        controlaFiltro = opc;
        boolEduardo = 1;
        menu = "action";
        estilizaBotao(opc - 1);
        if (boolEduardo == 1 && boolRafael == 1) {
            filtroTailyne();
            return;
        }
        selecionaOpc(1);
        return;
    }

    if (opc == 2) {
        controlaFiltro = opc;
        boolEduardo = 1;
        menu = "Battle-Royale";
        estilizaBotao(opc - 1);
        if (boolEduardo == 1 && boolRafael == 1) {
            filtroTailyne();
            return;
        }
        selecionaOpc(1);
        return;
    }

    if (opc == 3) {
        controlaFiltro = opc;
        boolEduardo = 1;
        menu = "fighting";
        estilizaBotao(opc - 1);
        if (boolEduardo == 1 && boolRafael == 1) {
            filtroTailyne();
            return;
        }
        boolEduardo = 1;
        selecionaOpc(1);
        return;
    }

    if (opc == 4) {
        controlaFiltro = opc;
        boolEduardo = 1;
        menu = "racing";
        estilizaBotao(opc - 1);
        if (boolEduardo == 1 && boolRafael == 1) {
            filtroTailyne();
            return;
        }
        boolEduardo = 1;
        selecionaOpc(1);
        return;
    }

    if (opc == 5) {
        controlaFiltro = opc;
        boolEduardo = 1;
        menu = "sci-fi";
        estilizaBotao(opc - 1);
        if (boolEduardo == 1 && boolRafael == 1) {
            filtroTailyne();
            return;
        }
        selecionaOpc(1);
        return;
    }

    if (opc == 6) {
        controlaFiltro = opc;
        boolEduardo = 1;
        menu = "shooter";
        estilizaBotao(opc - 1);
        if (boolEduardo == 1 && boolRafael == 1) {
            filtroTailyne();
            return;
        }
        selecionaOpc(1);
        return;
    }

    if (opc == 7) {
        controlaFiltro = opc;
        boolEduardo = 1;
        menu = "sports";
        estilizaBotao(opc - 1);
        if (boolEduardo == 1 && boolRafael == 1) {
            filtroTailyne();
            return;
        }
        selecionaOpc(1);
        return;
    }

    if (opc == 8) {
        controlaFiltro = opc;
        boolEduardo = 1;
        menu = "strategy";
        estilizaBotao(opc - 1);
        if (boolEduardo == 1 && boolRafael == 1) {
            filtroTailyne();
            return;
        }
        selecionaOpc(1);
        return;
    }

    if (opc == 9) {
        controlaFiltro = opc;
        boolEduardo = 0;
        estilizaBotao(opc - 1);
        selecionaOpc(9);
        return;
    }

}

function selecionaOpc(opc) {

    const options = {

        method: 'GET',

        headers: {
            'X-RapidAPI-Key': '6180cc780dmshc10d83878e62d71p104deejsn359ac2c41450',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    if (opc == 1) {
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${menu}`, options)
            .then(response => response.json())
            .then(response => chamarFuncoes(response))
            .catch(err => console.error(err));
        return;
    }

    if (opc == 9) {
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity`, options)
            .then(response => response.json())
            .then(response => chamarFuncoes(response))
            .catch(err => console.error(err));
        return;
    }
}

function estilizaBotao(opcBot) {
    let i = 0;

    for (i = 0; i < 8; i++) {
        if (i == opcBot) {
            botao[i].classList.toggle("botao_menu-ativo");
            botao[i].classList.toggle("botao_menu");
            divBot[i].classList.toggle("botao_menu-ativo");
            divBot[i].classList.toggle("botao_menu");


        } else {
            if (botao[i].classList.contains("botao_menu")) {
                continue;
            } else {
                botao[i].classList.toggle("botao_menu-ativo");
                botao[i].classList.toggle("botao_menu");
                divBot[i].classList.toggle("botao_menu-ativo");
                divBot[i].classList.toggle("botao_menu");
            }
        }

    }

    if (opcBot == 8) {
        botHome.classList.toggle("home");
        botHome.classList.toggle("home-ativo");
        divHome.classList.toggle("div_home");
        divHome.classList.toggle("div_home-ativo");
    } else {
        if (botHome.classList.contains("home")) {
            return;
        } else {
            botHome.classList.toggle("home");
            botHome.classList.toggle("home-ativo");
            divHome.classList.toggle("div_home");
            divHome.classList.toggle("div_home-ativo");
        }
    }
}
