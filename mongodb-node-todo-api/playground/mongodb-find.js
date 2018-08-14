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
    // 在TodoApp库下Todos集合中 新增json文档
    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2))
    // },(err)=>{
    //     console.log('Unable to fetch todos', err);
    // });


    db.collection('Users').find().count().then((count)=>{
        console.log(`${count}`)
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

   // db.close(); // 销毁一个实例时,调用MongoClient.close()方法来清理资源。
});