let botao_pc = document.getElementById("pc");
let botao_browser = document.getElementById("browser");
let botao_all = document.getElementById("all");

botao_pc.addEventListener("click", function(){
    api_plataforma(1)}
    );
botao_browser.addEventListener("click", function(){
    api_plataforma(2)}
    );
botao_all.addEventListener("click", function(){
    api_plataforma(3)}
    );



function api_plataforma(opc)
{
    let plat 
    
    if(opc==1)
    {
        plat = "pc";
    }
    if(opc==2)
    {
        plat = "browser";
    }
    if(opc==3)
    {
        plat = "all";
    }

    console.log(plat);

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e078caf048msh54b295ff558ce1cp14c4e7jsncbf5f00838c0',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plat}`, options)
        .then((response) => {
            response.json()
                .then(lista => console.log(lista));
        })
        .catch();
}