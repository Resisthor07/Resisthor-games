let preferidos=[540];
let lista_favoritos=[];
const button_add_favorites = document.getElementById("input_preferidos")


function push_id(id){
    preferidos.push(id);
    alert("adicionado aos favoritos!!");
    print_favorites();

}


function print_favorites() {
    for (let index in preferidos) {

        const dadosRece = fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${preferidos[index]}`, {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': 'cb269c757dmshd8dc4b1605c922dp186c0djsn0a6338dca307',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }).then((response) => {
            response.json().then(dados => {
                lista_favoritos = dados;
                console.log(dados);
                });
        }).catch((err) => {
            console.log("Erro!");
        });

    }
}


