// import request from "request";
// const request = require('request');
const yargs = require('yargs');
const geocode = require('./geoCode/geoCode');
// console.log(yargs);
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

geocode.gencodeAddress(argv.address,(errorMassage,results)=>{
    if(errorMassage) {
        console.log(errorMassage)
    } else {
        // console.log(JSON.stringify(results,undefined,2));
        console.log(results.address);
    }
});
var encodeAddress = encodeURIComponent(argv.address);
// console.log(argv);
console.log(2222);
console.log(encodeAddress);
// 发送Get请求
// 第一个参数:请求的完整URL,包括参数
// 第二个参数:请求结果回调函数,会传入3个参数,第一个错误,第二个响应对象,第三个请求数据

// node app.js -a "  "
// request({
//     url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
//     // url: 'http://www.weather.com.cn/data/cityinfo/101010100.html',
//     json: true,
// },(error,response,body)=>{
//     if(error){
//         console.log('Unable to connect to Google servers');
//     } else if(body.status=== 'ZERO_RESULTS') {
//         console.log('Unable to find that address');
//     } else if(body.status === 'OK') {
//         console.log(`address:${body.results[0].formatted_address}`);
//     }
//     // console.log(body);
//     // console.log(response);
// });