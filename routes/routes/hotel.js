const axios = require("axios");

axios({
  method: "GET",
  url: "https://hotels4.p.rapidapi.com/locations/search",
  headers: {
    //"content-type": "application/octet-stream",
    "x-rapidapi-host": "hotels4.p.rapidapi.com",
    "x-rapidapi-key": "afbc1de585mshda0ba0b375da6fep1ab69cjsn703c9596fdc7",
    useQueryString: true
  },
  params: {
    locale: "en_US",
    query: "Boston"
  }
})
  .then(response => {
    let hotelData = response.data.suggestions;
    console.log(hotelData[0].entities[0].caption);
    for (i = 0; i < hotelData[3].entities.length; i++) {
      console.log(hotelData[3].entities[i].name)
    }
  })
  .catch(error => {
    console.log(error);
  });
