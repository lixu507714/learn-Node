const request = require('request');

var gencodeAddress = (address) => {
    return new Promise((resolve,reject)=>{
        var encodeAddress = encodeURIComponent(address);
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
            // url: 'http://www.weather.com.cn/data/cityinfo/101010100.html',
            json: true,
        },(error,response,body)=>{
            if(error){
                reject('Unable to connect to Google servers');
                // console.log('Unable to connect to Google servers');
            } else if(body.status=== 'ZERO_RESULTS') {
                reject('Unable to find that address');
            } else if(body.status === 'OK') {
                console.log(`address:${body.results[0].formatted_address}`);
                resolve({
                    formatted_address:body.results[0].formatted_address,
                    latitude: body.results[0].geometry.latitude,
                    longitude: body.results[0].geometry.longitude
                })
            }
            // console.log(body);
            // console.log(response);
        });
    })
};


gencodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
}, (errorMessage) => {
    console.log(errorMessage);
});