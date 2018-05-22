// import request from "request";
const request = require('request');
// 发送Get请求
// 第一个参数:请求的完整URL,包括参数
// 第二个参数:请求结果回调函数,会传入3个参数,第一个错误,第二个响应对象,第三个请求数据
request({
    url: 'http://www.wweather.com.cn/data/cityinfo/101010100.html',
    json: true,
},(error,response,body)=>{
    console.log(error);
    console.log(body);
    console.log(response);
});