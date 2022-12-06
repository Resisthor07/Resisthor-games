
let botaoPCRafael = document.getElementById("pc");
let botaoBrowserRafael = document.getElementById("browser");
let botaoAllRafael = document.getElementById("all");
let plataformaRafael;

function selecionaOpcRafael(opc)
{
    
    if(opc==1)
    {
        plataformaRafael = "pc";
        buscaAPIRafael();
        return;
    }
    if(opc==2)
    {
        plataformaRafael = "browser";
        buscaAPIRafael();
        return;
    }
    if(opc==3)
    {
        plataformaRafael = "all";
        buscaAPIRafael();
        return;
    }
}

function mudaEstiloRafael(ids)
{

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

botaoPCRafael.addEventListener("click", function(){
    selecionaOpcRafael(1)}
    );
botaoBrowserRafael.addEventListener("click", function(){
    selecionaOpcRafael(2)}
    );
botaoAllRafael.addEventListener("click", function(){
    selecionaOpcRafael(3)}
    );
