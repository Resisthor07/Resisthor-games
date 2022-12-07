let elementosRafael =   
    [
        document.getElementById("pc"),
        document.getElementById("browser"),
        document.getElementById("all"),
        document.getElementById("favoritos")
    ];
    
let plataformaRafael;



function hoverOnRafael(id)
{
    let elemento = document.getElementById(id);

    elemento.style.background = "rgba(245, 245, 245, 0.25)";
}

function hoverOffRafael(id)
{
    let elemento = document.getElementById(id);

    elemento.style.background = "none";
}



function selecionaOpcRafael(opc)
{
    if(opc==1)
    {
        plataformaRafael = "pc";
        mudaEstiloRafael(0);
        buscaAPIRafael();
        return;
    }
    if(opc==2)
    {
        plataformaRafael = "browser";
        mudaEstiloRafael(1);
        buscaAPIRafael();
        return;
    }
    if(opc==3)
    {
        plataformaRafael = "all";
        mudaEstiloRafael(2);
        buscaAPIRafael();
        return;
    }
    if(opc==4)
    {
        mudaEstiloRafael(3);
    }
}

function mudaEstiloRafael(id)
{
    let itens = ["pc","browser","all", "favoritos"];
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

elementosRafael[0].addEventListener("click", () => selecionaOpcRafael(1));

elementosRafael[1].addEventListener("click", () => selecionaOpcRafael(2));

elementosRafael[2].addEventListener("click", () => selecionaOpcRafael(3));

elementosRafael[3].addEventListener("click", () => selecionaOpcRafael(4));

/* 
elementosRafael[0].addEventListener("mouseenter", () => hoverOnRafael("pc"));
elementosRafael[0].addEventListener("mouseleave", () => hoverOffRafael("pc"));

elementosRafael[1].addEventListener("mouseenter", () => hoverOnRafael("browser"));
elementosRafael[1].addEventListener("mouseleave", () => hoverOffRafael("browser"));

elementosRafael[2].addEventListener("mouseenter", () => hoverOnRafael("all"));
elementosRafael[2].addEventListener("mouseleave", () => hoverOffRafael("all")); */