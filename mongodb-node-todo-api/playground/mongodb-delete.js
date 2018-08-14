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

    // deleteMany
    // db.collection('Todos').deleteMany({text:'Walk the dogs'}).then((result)=>{
    //     console.log(result);
    // });


    // deleteOne
    // db.collection('Todos').deleteOne({text:'Walk the dogs'}).then((result)=>{
    //     console.log(result);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // })


    // db.collection('Users').deleteMany({name:'lx'}).then((result)=>{
    //     console.log(result);
    // });

   // db.close(); // 销毁一个实例时,调用MongoClient.close()方法来清理资源。
});