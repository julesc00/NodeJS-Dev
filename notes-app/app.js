const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');



// Customize yargs version
yargs.version('1.1.0')

// Create Add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // makes it to be required to provide
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        notes.removeNote(argv.title);
    }
})

// List the notes
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: () => {
        notes.listNotes();
    }
})

// Read notes
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})


yargs.parse() // this is part of it--important