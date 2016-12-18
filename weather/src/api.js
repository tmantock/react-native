var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=3ada3a03e32b69ed8439a913afab37e2';

var kelvinToFarenheit = function(kelvin){
    return Math.round((kelvin - 273.15) * 1.8 +32) + ' ˚F'
};

module.exports = function(latitude, longitude) {
    var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(json){
            return {
                city: json.city,
                temperature: kelvinToFarenheit(json.main.temp),
                description: json.weather[0].description,
            }
        });
}
