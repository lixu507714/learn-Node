var obj = {
    name: 'Andrew'
};
Object.assign(obj, {age: '1'});
var objs = JSON.parse(JSON.stringify(obj)); // 深复制
var obj1 = {
    name: 'Andrew',
    age:1
};
obj = obj1;
console.log(obj);
console.log(objs);

// var personString = '{"name": "Andrew", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person); // ?????



//
const fs = require('fs');
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
console.log(originalNoteString);
// 异步方法
fs.writeFile('notes.json', JSON.stringify(Object.assign(JSON.parse(originalNoteString),{sex: '女'})), (err,data) =>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// fs.writeFile('./message.txt', '这是第一行',function(err){
// if(err) console.log('写文件操作失败');
// else console.log('写文件操作成功');
// });
// 需要注意的是（同步方法和异步方法的区别）：
// 在使用同步方法执行的操作结束之前，不能执行后续代码的执行；而异步方法将操作结果作为回调函数的参数进行返回，
// 方法调用之后，就可以立即执行后续的代码，读取完毕后会调用对应的回调函数。

// 同步方法
// fs.writeFileSync('./message.txt','这是第一行');

fs.writeFileSync('notes.json', JSON.stringify(Object.assign(JSON.parse(originalNoteString),{sex: '女'})));  // 写入数据


var noteString = fs.readFileSync('notes.json'); // 读取数据
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);





