var mongoose = require('mongoose'); // 引入 mongoose ，然后连接我们本地的 test 数据库
var Schema = mongoose.Schema;

var User = mongoose.model('User', new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
}));

module.exports = {User};