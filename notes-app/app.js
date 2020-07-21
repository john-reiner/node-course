const validator = require('validator')
getNotes = require('./notes.js')

notes = getNotes('whatever I want...')

console.log(notes)


console.log(validator.isURL('https/johnreiner.com'))