const request = require('request');

var gencodeAddress = (address,callback)=>{
    var encodeAddress = encodeURIComponent(address);
    // node app.js -a "  "
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        // url: 'http://www.weather.com.cn/data/cityinfo/101010100.html',
        json: true,
    },(error,response,body)=>{
        if(error){
            callback('Unable to connect to Google servers');
            // console.log('Unable to connect to Google servers');
        } else if(body.status=== 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if(body.status === 'OK') {
            console.log(`address:${body.results[0].formatted_address}`);
            callback(undefined,{
                formatted_address:body.results[0].formatted_address,
                latitude: body.results[0].geometry.latitude,
                longitude: body.results[0].geometry.longitude
            })
        }
        // console.log(body);
        // console.log(response);
    });
};




module.exports.gencodeAddress = gencodeAddress;