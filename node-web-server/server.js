const express = require('express');
const hbs = require('hbs'); // Handlebars.js 模板引擎

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public')); // help.html

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
        currentYear: new Date().getFullYear()
    })
});

app.get('/about',(req,res)=>{
   // res.send('About page');
    res.render('about.hbs',{
        pageTitle:'About Page',
        currentYear: new Date().getFullYear()
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

