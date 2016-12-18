var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=3ada3a03e32b69ed8439a913afab37e2';

var kelvinToFarenheit = function(kelvin){
    return Math.round((kelvin - 273.15) * 1.8 +32) + ' ˚F'
};

module.exports = function(latitude, longitude) {
    var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

    return fetch(url)
        .then((response) => {
            //must call json to get access to data
            //but data is not returned by json it returns a promis
            return response.json();
        })
        .catch((error) => console.warn("fetch error: ", error))
        //get the data from the json promise
        .then((response) => {
            return {
                city: response.name,
                temperature: kelvinToFarenheit(response.main.temp),
                description: response.weather[0].description,
            }
        });
}
