const express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.status(404).send({
        error: 'Page not found.',
        name:'Todo App v1.0'
    })
});

app.get('/users',(req,res)=>{
   res.status(200).send([
       {
           name:'lx',
           age:24
       },{
           name:'sh',
           age:25
       },{
           name:'yq',
           age:26
       },{
           name:'sj',
           age:27
       }
   ])
});

app.listen(8000);
module.exports.app = app;
