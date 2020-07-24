const fs = require ('fs')
const chalk = require('chalk')



const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        })     
        console.log(chalk.green.inverse(`${chalk.underline(title)} was added to notes!`))   
    } else {
        console.log(chalk.red.inverse(`${chalk.underline(title)} is already a title being used...`))
    }
    saveNotes(notes)
}

const removeNote = title => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)
    
    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse(`The note title ${chalk.underline(title)} does not exist...`))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse(`You have deleted the ${chalk.underline(title)} note!`))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes...'))
    notes.forEach(note => console.log(chalk.blue.inverse.underline(note.title)));
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const readNote = title => {
    const notes = loadNotes()
    const noteToShow = notes.find(note => note.title === title)
    
    if (noteToShow) {
        console.log(chalk.blue.inverse.underline(noteToShow.title))
        console.log(chalk.inverse(noteToShow.body))
    } else {
        console.log(chalk.red.inverse(`Cannot find note with the title of: ${chalk.underline(title)}`))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}