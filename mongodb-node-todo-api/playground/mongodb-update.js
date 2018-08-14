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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b7164df9dfaebcd3b5fbf1e')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })


    db.collection('Users').findOneAndUpdate({
        _id: 1
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // db.close(); // 销毁一个实例时,调用MongoClient.close()方法来清理资源。
});

// ‘$inc’ 增减修改器,只对数字有效.下面的实例: 找到 age=22的文档,修改文档的age值自增1
// Model.update({‘age’:22}, {’$inc’:{‘age’:1} }  );
// 执行后: age=23

// ‘$set’ 指定一个键的值,这个键不存在就创建它.可以是任何MondoDB支持的类型.
// Model.update({‘age’:22}, {’$set’:{‘age’:‘haha’} }  );
// 执行后: age=‘haha’

// ‘$unset’ 同上取反,删除一个键
// Model.update({‘age’:22}, {’$unset’:{‘age’:‘haha’} }  );
// 执行后: age键不存在

// ‘$push’ 给一个键push一个数组成员,键不存在会创建
// Model.update({‘age’:22}, {’$push’:{‘array’:10} }  );
// 执行后: 增加一个 array 键,类型为数组, 有一个成员 10

//‘$each’ 遍历数组, 和 $push 修改器配合可以插入多个值
// Model.update({‘age’:22}, {’$push’:{‘array’:{’$each’: [1,2,3,4,5]}} }  );
// 执行后: array : [10,1,2,3,4,5]

