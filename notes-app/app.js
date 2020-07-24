const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs');
const { string } = require('yargs');

// Customize yargs version
yargs.version('1.1.0')

// Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        return notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
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
    handler(argv) {
        return notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List out all of your notes',
    handler() {
        return notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'View a note...',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        return notes.readNote(argv.title)
    }
})

yargs.parse()
