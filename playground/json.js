var obj = {
    name: 'Andrew'
};
Object.assign(obj, {age: '1'});
var objs = JSON.parse(JSON.stringify(obj));
console.log(obj);
console.log(objs);

// var personString = '{"name": "Andrew", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person); // ?????



//
// const fs = require('fs');
// var originalNote = {
//     title: 'Some title',
//     body: 'Some body'
// };
// var originalNoteString = JSON.stringify(originalNote);
// fs.writeFileSync('notes.json', originalNoteString);
//
// var noteString = fs.readFileSync('notes.json');
// var note = JSON.parse(noteString);
// console.log(typeof note);
// console.log(note.title);
//
