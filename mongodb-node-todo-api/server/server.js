var mongoose = require('mongoose'); // 引入 mongoose ，然后连接我们本地的 test 数据库

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/testApp');
var Schema = mongoose.Schema;

var Todo = mongoose.model('Todo', new Schema({
    text: {
        type: String,
        required: true, // 字段是必要的
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
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
    text: 'feed the cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to todo', e);
});

var User = mongoose.model('User', new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
}));

var newUser = new User({
    email: 'lx507714@163.com'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2))
}, (e) => {
    console.log(e);
});