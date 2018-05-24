const yargs = require('yargs');
const axios = require('axios');

// node app-promise.js --t="123" --body="body"
const argv = yargs
    .options({
        a:{
            demand: true,
            alias:'address',
            describe:'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;
var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
axios.get(geocodeUrl).then((response)=>{
    console.log(222);
    console.log(response.data);
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('unable to find that Address');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/${lat},${lng}`;
    console.log(res.data.results[0].formatted_address);
}).then((response)=>{
    console.log(response);
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}, It feels like ${apparentTemperature}`)
}).catch((e)=>{
    if(e === 'ENOTFOUND') {
        console.log(111);
        console.log(e);
        console.log('unable to connect to API servers');
    } else {
        console.log(e.message);
    }

});
// ECONNRESET ENOTFOUND
