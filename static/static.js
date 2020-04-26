const express = require('express');
var app = express();
//定义静态资源路径文件夹
app.use('/static',express.static('./static'));