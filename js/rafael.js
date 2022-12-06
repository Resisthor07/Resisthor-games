let elementos =   
    [
        document.getElementById("pc"),
        document.getElementById("browser"),
        document.getElementById("all")
    ];
    console.log(elementos);
let botaoPCRafael = document.getElementById("pc");
let botaoBrowserRafael = document.getElementById("browser");
let botaoAllRafael = document.getElementById("all");
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
        mudaEstiloRafael(["pc", "all", "browser"]);
        buscaAPIRafael();
        return;
    }
    if(opc==2)
    {
        plataformaRafael = "browser";
        mudaEstiloRafael(["browser", "pc", "all"]);
        buscaAPIRafael();
        return;
    }
    if(opc==3)
    {
        plataformaRafael = "all";
        mudaEstiloRafael(["all", "browser", "pc"]);
        buscaAPIRafael();
        return;
    }
}

function mudaEstiloRafael(ids)
{
    let elemento;
    for(e in ids)
    {
        if(e == 0)
        {
            estilo = document.createElement("style");
            elemento = document.getElementById(ids[e]);
            
            elemento.style.background = "rgba(245, 245, 245, 0.25)";
            elemento.style.border = "solid 4px rgb(68, 68, 68)";
            elemento.style.borderTop = "none";
            elemento.style.borderRight = "none";
            elemento.style.borderLeft = "none";
        
            /*
            elemento.style.cssText =
            `
            background: rgba(245, 245, 245, 0.25);

            border: solid 4px rgb(68, 68, 68);
            border-top: none;
            border-right: none;
            border-left: none;
            `;
            */

        }
        else
        {
            elemento = document.getElementById(ids[e]);

            
            elemento.style.border = "hidden";
            elemento.style.background = "none";
            elemento.style.transition = "all .75s";
                        


            /*
            elemento.style.cssText =
            `
            color: #ffffff;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;

            width: 125px;
            height: 48px;
            border: hidden;
            border-radius: 3px;
            background: none;

            transition: all .75s;

            cursor: pointer;
            `;
            */
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

elementos[0].addEventListener("click", () => selecionaOpcRafael(1));

elementos[1].addEventListener("click", () => selecionaOpcRafael(2));

elementos[2].addEventListener("click", () => selecionaOpcRafael(3));

/* 
elementos[0].addEventListener("mouseenter", () => hoverOnRafael("pc"));
elementos[0].addEventListener("mouseleave", () => hoverOffRafael("pc"));

elementos[1].addEventListener("mouseenter", () => hoverOnRafael("browser"));
elementos[1].addEventListener("mouseleave", () => hoverOffRafael("browser"));

elementos[2].addEventListener("mouseenter", () => hoverOnRafael("all"));
elementos[2].addEventListener("mouseleave", () => hoverOffRafael("all")); */