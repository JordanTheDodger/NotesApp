const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateSingleNote = notes.find((note) => notes.title === title)
    //retunrs undefined if no note is found

    if (duplicateSingleNote.length === undefined /* !duplicateSingleNote */) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.greenBright.inverse('New Note Added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
    
}

//Challenge 6
const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter( (singleNote) => {
        return singleNote.title !== title;
    })
    const noteMatch = notes.filter((singleNote) => singleNote.title === title)
    
    if (noteMatch.length === 0){
         console.log(chalk.bgRed('Note not found'))        
     }else {
         console.log(chalk.bgGreen('Note Removed'))
         saveNotes(noteToKeep)
 
    console.log('Updated Notes :- ') 
    console.log(noteToKeep)
    console.log('Removed Note')
    console.log(noteMatch)
}
  
    
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach(element => {
         console.log(element.title)
     })
}

const readNote = (title) =>{
    const notes = loadNotes()
    const matchNote = notes.find((singleNote) => singleNote.title === title )
    
    if (matchNote) {
        console.log(chalk.bgBlack.bold('TITLE:- '))
        console.log(chalk.inverse(matchNote.title))
        console.log(chalk.bgBlack.bold('DESCRIPTION:- '))
        console.log(chalk.bgBlue(matchNote.body))
    } else {
        console.log(chalk.red.inverse('Note Not found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
