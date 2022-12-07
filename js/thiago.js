let preferidos=[];
let lista_favoritos=[];
const pagina = document.getElementsByTagName("main");
const closeFavoritesDiv = document.getElementById("closeFavoritesDiv");
const button_add_favorites = document.getElementById("PopupFavoritos");
const showFavorites = document.getElementById("favoritos");
const closeFavorites = document.getElementById("close_favorites");
const pai = document.getElementById("ListaFavoritos");


function push_id(id){
   if(preferidos.includes(id) === true ){
        alert("já adicionado")
    }else {
        preferidos.push(id);
        alert("Jogo adicionado a lista dos favoritos!!");
        print_favorites();
   }
}

function removeChild(){
    while(pai.firstChild){
        pai.removeChild(pai.firstChild)
    }
}

function print_favorites() {    
    let index;
    removeChild();
    for (index in preferidos) {
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
        <div class="thiagoOrganizafavoritos">
            <a href="${lista_favoritos.game_url}" class="thiagolink_favorites">
                <img  class="ThiagoImgFavoritos" src=" ${lista_favoritos.thumbnail}" >
            </a>
            <div>
                <p class="thiagoname_favorite"> ${lista_favoritos.title}</p>
                <p class="thiagoname_favorite"></p>
            </div>
        </div>
        `              
              pai.appendChild(filho);
                });
        }).catch((err) => {
            console.log("Erro!");
        });

        
    }
}



function   openPopupFavorites(){
    button_add_favorites.style.display = 'flex';
    closeFavoritesDiv.style.display="block";    
    pagina[0].style.filter = "blur(10px)";
    console.log("chamou");   
}

function closePopupFavorite(){
    button_add_favorites.style.display = 'none';
    pagina[0].style.filter = "none";
    closeFavoritesDiv.style.display ="none";
    console.log("fechar");
}

showFavorites.addEventListener("click", openPopupFavorites);
closeFavorites.addEventListener("click", closePopupFavorite);
closeFavoritesDiv.addEventListener("click", closePopupFavorite);