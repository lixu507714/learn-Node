console.log('Starting notes.js');
module.exports.age = 22;
module.exports.addNodes = () => {
  return  'New note';
};
module.exports.add = (a, b) => {
    return a+b;
};


var addNode = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('getAll the list');
};

var getNote = (title) => {
    console.log('getNote', title);
};

var removeNote = (title) => {
    console.log('removeNote', title);
};

module.exports = {
    addNode,
    getAll,
    getNote,
    removeNote
};