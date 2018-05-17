console.log('Starting notes.js');
const fs = require('fs');
// console.log(module);
module.exports.age = 22;
module.exports.addNodes = () => {
  return  'New note';
};
module.exports.add = (a, b) => {
    return a+b;
};


var fetchNodes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var save = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// node nodtes.js add --title=secret --body="some body here"
var addNode = (title, body) => {
    // console.log('Adding note', title, body);
    var notes = fetchNodes();
    var note = {
        title,
        body
    };
    //
    // var dulicateNotes = notes.filter((note) => {
    //    return note.title === title;
    // });
    var dulicateNotes = notes.filter((note) => note.title === title);
    if (dulicateNotes.length === 0) {
        notes.push(note);
        save(notes);
        return notes;
    }
};

var getAll = () => {
    console.log('getAll the list');
    return fetchNodes();
};


var getNote = (title) => {
    console.log('getNote', title);
    var notes = fetchNodes();
    var filterdNotes = notes.filter((note) => note.title !== title);
    return filterdNotes[0];
};

var removeNote = (title) => {
    // fetch notes
    // filter notes, removing the one with title of argument
    // console.log('removeNote', title);
  var note = fetchNodes();
  var filterNotes = note.filter((note) => {
      return note.title !== title;
  });
    save(filterNotes);
    return note.length !== filterNotes.length;
};


var logNote = (note) => {
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNode,
    getAll,
    getNote,
    removeNote,
    logNote
};