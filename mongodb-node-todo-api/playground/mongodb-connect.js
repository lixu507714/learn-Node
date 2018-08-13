// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
//插入操作
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB service')
    }
    console.log('Connected to MongoDB server');
    //在TodoApp库下Todos集合中 新增json文档
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // db.collection('Users').insertOne({
    //     _id:123,
    //     name: 'lx',
    //     age:25,
    //     location:'Philadephia'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops);
    // });

    db.close(); // 销毁一个实例时,调用MongoClient.close()方法来清理资源。
});