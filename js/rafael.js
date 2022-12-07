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


function selecionaOpcRafael(opc)
{
    if(controladorRafael == opc)
    {
        mudaEstiloRafael(opc);
        controladorRafael = -1;
        boolRafael = 0;
        return;
    }

    

    if(opc == 0)
    {
        controladorRafael = opc;
        plataformaRafael = "pc";
        mudaEstiloRafael(opc);

        if(boolRafael == 1 && boolEduardo == 1) 
        {
            filtroTailyne();    
            return;
        }

        buscaAPIRafael();
        boolRafael = 1;
        return;
    }
    if(opc == 1)
    {
        controladorRafael = opc;
        plataformaRafael = "browser";
        mudaEstiloRafael(opc);

        if(boolRafael == 1 && boolEduardo == 1) 
        {
            filtroTailyne();    
            return;
        }

        buscaAPIRafael();
        boolRafael = 1;
        return;
    }
    if(opc == 2)
    {
        controladorRafael = opc;
        plataformaRafael = "all";
        mudaEstiloRafael(opc);

        if(boolRafael == 1 && boolEduardo == 1) 
        {
            filtroTailyne();    
            return;
        }

        buscaAPIRafael();
        boolRafael = 1;
        return;
    }
    if(opc == 3)
    {
        controladorRafael = -1;
        console.log("entrou");
        mudaEstiloRafael(opc);

        openPopupFavorites();

        boolRafael = 0;
        return;
    }
}

function mudaEstiloRafael(id)
{
    let e;
    for(e=0 ; e<3; e++)
    {
        if(e == id)
        {   
            elementosRafael[e].classList.toggle("botao-ativo");
            elementosRafael[e].classList.toggle("botao-padrao");
        }
        else
        {
            if(elementosRafael[e].classList.contains("botao-padrao"))
            {
                continue;
            }
            else
            {
                elementosRafael[e].classList.toggle("botao-padrao");
                elementosRafael[e].classList.toggle("botao-ativo");
            }
        }
    }
    
    if(e == id)
    {
        elementosRafael[e].classList.toggle("botao-favorito-ativo");
        elementosRafael[e].classList.toggle("botao-favorito-padrao");
    }
    else
    {
        if(elementosRafael[e].classList.contains("botao-favorito-padrao"))
        {
            return;
        }
        else
        {
            elementosRafael[e].classList.toggle("botao-favorito-padrao"); 
            elementosRafael[e].classList.toggle("botao-favorito-ativo");
        }
    }
}

function buscaAPIRafael()
{
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
