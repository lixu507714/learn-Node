const request = require('request');


var getWeather = (lat,lng,callback)=>{
    request({
        url: `https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/${lat},${lng}`,
        json: true
    },(error,response,body)=>{
        if(error) {
            callback('unable to connect to forecast.io server.');
        } else if(response.statusCode === 400) {
            callback('unable to featch weather');
        } else if (response.statusCode === 200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};


module.exports.getWeather = getWeather;