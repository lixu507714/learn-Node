var mongoose = require('mongoose'); // 引入 mongoose ，然后连接我们本地的 test 数据库

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testApp');

var Todo = mongoose.model('Todo', new mongoose.Schema({
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
}));

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//    console.log('Saved todo',doc);
// },(e)=>{
//     console.log(e)
// });

var otherTodo = new Todo({
    text:'feed the cat',
    completed: true,
    completedAt:123
});

otherTodo.save().then((doc)=>{
   console.log('save todo',doc);
},(e)=>{
    console.log('Unable to todo',e);
});