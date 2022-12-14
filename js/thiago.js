//let preferidos = [];
//let lista_favoritos;
const pagina = document.getElementsByTagName("main");
const closeFavoritesDiv = document.getElementById("closeFavoritesDiv");
const button_add_favorites = document.getElementById("PopupFavoritos");
const removeLista = document.getElementById("remove_lista");

const closeFavorites = document.getElementById("close_favorites");
const pai = document.getElementById("ListaFavoritos");

function carrega_localStorage()
{

        if (localStorage.getItem("lista_jogos") != null) {
            listaDeJogosFavoritos = JSON.parse(localStorage.getItem("lista_jogos") || "[]");
            //console.log(preferidos);
            print_favorites();
        }


}
/*function push_id(id) {
    if (preferidos.includes(id) === true) {
        alert("Este jogo já está adicionado a sua lista de preferidos");

    } else {
        preferidos.push(id);
        alert("Jogo adicionado a lista dos favoritos!!");
        print_favorites();
        localStorage.setItem("lista_jogos", JSON.stringify(preferidos));
    }
}*/

function removeChild() {
    while (pai.firstChild) {
        pai.removeChild(pai.firstChild)
    }
}

function print_favorites() {
    let index;
    removeChild();
    console.log(listaDeJogosFavoritos);

    for (index in listaDeJogosFavoritos) {
        const filho = document.createElement("div");
        console.log(index);

       /* const dadosRece = fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${preferidos[index]}`, {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }).then((response) => {
            response.json().then(dados => {
                lista_favoritos = dados;
                console.log(lista_favoritos);
                console.log("clicou");*/

                filho.innerHTML = `
        <div class="thiagoOrganizafavoritos">
            <a href="${listaDeJogosFavoritos[index].game_url}" class="thiagolink_favorites" target="_blank">
                <img  class="ThiagoImgFavoritos" src=" ${listaDeJogosFavoritos[index].thumbnail}" >           
          
                <p class="thiagoname_favorite"> ${listaDeJogosFavoritos[index].title}</p>
                </a>
                  <div>
                <img class="trash_favorites"  src="img/favoritos/lixeira.png" alt="lixeira"  id="remove_lista" 
                onclick= "remove_lista(${index})">
            </div>
        </div>
        `
                pai.appendChild(filho);

            //});

       // }).catch((err) => {
           // console.log("Erro!");
       // });


    }
}

function openPopupFavorites() {
    print_favorites()
    button_add_favorites.style.display = 'flex';
    closeFavoritesDiv.style.display = "block";
    pagina[0].style.filter = "blur(10px)";
    //console.log("chamou");
}
function closePopupFavorite() {
    button_add_favorites.style.display = 'none';
    pagina[0].style.filter = "none";
    closeFavoritesDiv.style.display = "none";
    mudaEstiloRafael(3);
    //console.log("fechar");
}

function remove_lista(index) {
    //let index = listaDeJogosFavoritos.indexOf(id);
    if (index !== -1) {
       console.log("lixeira");
        listaDeJogosFavoritos.splice(index, 1);
        localStorage.setItem("lista_jogos", JSON.stringify(listaDeJogosFavoritos));
        print_favorites();
        botoesFavoritar[index].setAttribute("src", "img/quadro_de_itens/estrela_vazada.png");
        adicionadoFavoritosPreenchimento[index] = false;
    }


}

//removeLista.addEventListener("click", remove_lista);
closeFavorites.addEventListener("click", closePopupFavorite);
closeFavoritesDiv.addEventListener("click", closePopupFavorite);