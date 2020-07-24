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
        console.log('New note added')   
    } else {
        console.log('Note title taken!')
    }



    saveNotes(notes)

}

const removeNote = title => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)
    
    if (notesToKeep.length === notes.length) {
        console.log(chalk.bgRed(`The note title ${chalk.underline(title)} does not exist...`))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen(`You have deleted the ${chalk.underline(title)} note!`))
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