var mongoose = require('mongoose'); // 引入 mongoose ，然后连接我们本地的 test 数据库
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

module.exports = {Todo};