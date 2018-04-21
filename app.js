console.log('hello world.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');
// const argv = yargs.argv;
const json = require('./playground/json.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'list all notes')
    .command('read', 'Read a note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
    })
    .command('remove', 'remove a note', {
        title: titleOptions,
        body: bodyOptions
    })
    .help()
    .argv;
// console.log(json);
var command = argv._[0];
// console.log(_.isString(true));

// fs.appendFile('greetings.txt', 'Hello World');
// var user = os.userInfo(); //  所在的文件夹
// console.log(notes);
// console.log('Result:', notes.add(1, 2));

// var filteredArray = _.uniq(['Andrew', 1, 2, 3, 3]); // 删除重复的字段
// console.log(filteredArray);

// fs.appendFile('greetings.txt', `Hello ${user.username}! you are ${notes.addNodes}`);






// process.argv用法：Process.argv的用法是 第一个是node 第二个是脚本文件 第三个是打印的任意参数
// var command = process.argv[2];
console.log('command', command);
console.log('process', process.argv);
console.log('yargs' ,argv);
//
if (command === 'add') {
    var note = notes.addNode(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    console.log('Listing all notes');
    var allNotes = notes.getAll();
    console.log(`prinying ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    console.log('read all notes');
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('note found');
        notes.logNote(note);
    } else {
        console.log('note not found');
    }

} else if(command === 'remove') {
    console.log('delete all remove');
    var notesRemoved = notes.removeNote(argv.title);
    var message = notesRemoved ? 'note was remove' : 'note not found';
    console.log(message);
} else {
    console.log('Commond not recognized');
}

