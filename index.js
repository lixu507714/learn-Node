const express = require('express');
const http = require('http');
const babyParser = require('body-parser');//post请求要借助body-parser模块。使用后，将可以用req.body得到参数
var app = express();


//定义静态资源路径文件夹
// app.use('/static',express.static('./static'));
//设置跨域访问
app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1');
       res.header("Content-Type", "application/json;charset=utf-8");
      next();
    });
// 定义方法
// app.get('/',(req,res)=>{
//    res.send('woheni');
// })

// app.post('/post',(req,res)=>{
//    res.send('hellloworad')
// })

// var server =  http.createServer((req,res)=>{
//     // console.log(req)
//     // console.log(res)
//     res.end('lixu')
// })
// 路由
var home = require('./route/home.js')
app.use('/home',home)
// app.get('/class',(req,res)=>{
//     console.log(123)
//     let result = {
//         err:0,
//         msg:'ok',
//         data:{
//          name:'李旭',
//          age:23,
//          birthday:'1991-1-02'
//         }
//     }
//     res.send(result);
//  })
var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s',host,port);
})




// server.listen(4300);
// "test": "mocha **/**/*.test.js",