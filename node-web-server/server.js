const express = require('express');
const hbs = require('hbs'); // Handlebars.js 模板引擎
const fs = require('fs');

// const port = process.env.PORT || 3000;
var app = express();
// nodemon server.js -e js,hbs  运行
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); // help.html

// 中间件
// 中间件函数能够访问请求对象 (req)、响应对象 (res) 以及应用程序的请求/响应循环中的下一个中间件函数。
// 下一个中间件函数通常由名为 next 的变量来表示。

app.use((req,res,next)=>{
    var now = new Date().toString();
   var log = `${now}: ${req.method} ${req.url}`;
   fs.appendFile('server.log',log+ '/n',(err)=>{
       console.log(err);
   });
   console.log(log);
    next();
});

//
// app.use((req,res,next)=>{
//     res.render('maintenance.hbs')
// });


app.use(express.static(__dirname + '/public')); // help.html



hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});

// req (请求) 和 res (响应) 与 Node 提供的对象完全一致，因此，你可以调用 req.pipe()、req.on('data', callback) 以及任何 Node 提供的方法。

app.get('/',(req,res)=>{
    // 对网站首页的访问返回
    // res.send({
    //     name: 'Andrew',
    //     likes: [
    //         'biking',
    //         'cities'
    //     ]
    // });
    res.render('home.hbs',{
        pageTitle:'home Page',
        welcomeMessage: 'welcome to my website',
        // currentYear: new Date().getFullYear()
    })
});

app.get('/about',(req,res)=>{
   // res.send('About page');
    res.render('about.hbs',{
        pageTitle:'About Page',
        // currentYear: new Date().getFullYear()
    })
});

app.get('/bad',(req,res)=>{
   res.send({
     errorMassage: 'Unable to handle request'
   })
});

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});

// 网站首页接受 POST 请求
// app.post('/',(req,res)=>{
//     res.send('Got a POST request');
// });

// /user 节点接受 PUT 请求
// app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user');
// });

// /user 节点接受 DELETE 请求
// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user');
// });

// var server = app.listen(3000, ()=>{
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('Example app listening at http://%s:%s', host, port);
// });

// 通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
// app.use(express.static(path.join(__dirname, 'fx-public'), options));

