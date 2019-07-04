const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if(!duplicateNote) {
        // Push in new notes
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.blue.inverse('New note addded'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }

}

// Remove note
const removeNote = title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter( note => note.title !== title)

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'));
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

// List notes
const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.white.inverse('Your Notes'));


    notes.forEach(note => {
        console.log(note.title);
    });
    

}

// Reading a note
const readNote = title => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if(note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}


// Save Notes
const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// Load Notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [] // Since there is no file yet and data is coming in into an object, catch will create that empty array.
    }

    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}