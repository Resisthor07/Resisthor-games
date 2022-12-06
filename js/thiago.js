let preferidos=[540];
let lista_favoritos=[];
const button_add_favorites = document.getElementById("input_preferidos");
const showFavorites = document.getElementById("favoritos");


function push_id(id){
    preferidos.push(id);
    alert("adicionado aos favoritos!!");
    print_favorites();

}

function print_favorites() {
    let index;
    for (index in preferidos) {
        const pai = document.getElementById("ListaFavoritos");
        const filho = document.createElement("div");

        const dadosRece = fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${preferidos[index]}`, {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }).then((response) => {
            response.json().then(dados => {
                lista_favoritos = dados;
                console.log(lista_favoritos);
                console.log("clicou");

                filho.innerHTML = `
        <img class="ThiagoImgFavoritos" src=" ${lista_favoritos.thumbnail}">
        
        `
                pai.appendChild(filho);
                });
        }).catch((err) => {
            console.log("Erro!");
        });

    }
}


function   popup_favorites(){
    
    
   
}

showFavorites.addEventListener("click", popup_favorites);