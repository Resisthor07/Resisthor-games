if (boolRafael==1 && boolEduardo==1) {
    filtroTailyne();
}

function filtroTailyne(){
	
	const options = {
		
		method: 'GET',
		
		headers: {
			'X-RapidAPI-Key': '6180cc780dmshc10d83878e62d71p104deejsn359ac2c41450',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
		}
	};

	fetch(`https://www.freetogame.com/api/games?platform=${plataformaRafael}&category=${menu}&sort-by=release-date`, options)
		.then(response => response.json())
		.then(response => console.log(response))
	    .catch(err => console.error(err));


}

