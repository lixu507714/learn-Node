const yargs = require('yargs');
const geocode = require('./geoCode/geoCode');
const weather = require('./weather/weather');
console.log(1111);
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


geocode.gencodeAddress(argv.address, (errorMassage, results) => {
    if (errorMassage) {
        console.log(errorMassage)
    } else {
        console.log(results.address);

// 19146  08822
// lat lng callback
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                // console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`it's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`)
            }
        });
    }
});
