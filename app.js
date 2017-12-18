console.log('hello world.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./nodes.js');
// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// fs.appendFile('greetings.txt', 'Hello World');
var user = os.userInfo(); //  所在的文件夹
// console.log(notes);
// console.log('Result:', notes.add(1, 2));

var filteredArray = _.uniq(['Andrew', 1, 2, 3, 3]); // 删除重复的字段
console.log(filteredArray);

fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.addNodes}`);


