console.log('hello world.');

const fs = require('fs');
const os = require('os');
const notes = require('./nodes.js');

// fs.appendFile('greetings.txt', 'Hello World');
var user = os.userInfo(); //  所在的文件夹
console.log(notes);
console.log('Result:', notes.add(1, 2));
fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.addNodes}`);

