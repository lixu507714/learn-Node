console.log('hello world.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');
const argv = yargs.argv;
// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

// fs.appendFile('greetings.txt', 'Hello World');
// var user = os.userInfo(); //  所在的文件夹
// console.log(notes);
// console.log('Result:', notes.add(1, 2));

// var filteredArray = _.uniq(['Andrew', 1, 2, 3, 3]); // 删除重复的字段
// console.log(filteredArray);

// fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.addNodes}`);






// process.argv用法：Process.argv的用法是 第一个是node 第二个是脚本文件 第三个是打印的任意参数

var command = process.argv[2];
console.log('command', command);
console.log('process', process.argv);
console.log('yargs' ,argv);
//
if (command === 'add') {
    console.log('Adding new note');
    notes.addNode(argv.title, argv.body)
} else if (command === 'list') {
    console.log('Listing all notes');
    notes.getAll();
} else if(command === 'delete') {
    console.log('delete all notes');
} else {
    console.log('Commond not recognized');
}

