let recebe_section = document.getElementById("exibe_filtro");
let botaoTailyne = document.getElementById("botaoFechar");
botaoTailyne.addEventListener("click", fechaPopup);

function filtroTailyne(){
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};
        
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plataformaRafael}&category=${menu}&sort-by=release-date`, options)
        .then(response => response.json())
        .then(response => {
            if (response.length == undefined) {
                // window.alert("Filtro não aplicavel!");
                popUpFiltroNaoAplicavel();
                return;
            } else {
                chamarFuncoes(response);
                console.log(response);
            }
        })
        .catch(err => window.alert(err));


}

function popUpFiltroNaoAplicavel() {
    recebe_section.style.display = "flex";
    pagina[0].style.filter = "blur(10px)";
}

function fechaPopup() {
    recebe_section.style.display = "none";
    pagina[0].style.filter = "none";
    boolRafael = 0;
    boolEduardo = 0;
    menu = 0;
    plataformaRafael = 0;
    selecionaFiltro(9);
    mudaEstiloRafael(4);
    estilizaBotao(9);
}

