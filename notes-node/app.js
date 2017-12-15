console.log('hello world.');

const fs = require('fs');
const os = require('os');

// fs.appendFile('greetings.txt', 'Hello World');
var user = os.userInfo(); //  所在的文件夹
console.log(user);
fs.appendFire('greetings.txt', `Hello ${user.username}!`);

