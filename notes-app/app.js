const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs');

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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
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
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List out all of your notes',
    handler: function () {
        console.log('Listing our your notes now...')
    }
})

yargs.command({
    command: 'read',
    describe: 'View a note...',
    handler: function () {
        console.log('This is your note...')
    }
})

// add, remove, read, list

// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse()
