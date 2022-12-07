
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
        .then(response => console.log(response))
        .catch(err => console.error(err));


}

