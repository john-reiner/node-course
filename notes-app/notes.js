const fs = require ('fs')
const chalk = require('chalk')



const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title 
    })

    if (duplicateNotes.length === 0) {
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
}