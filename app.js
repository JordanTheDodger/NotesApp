const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')


//Create a add command
yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true, // if it is true then you to provide title to work command properly
            type:'string'
        },
    //Challenge 5    
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'

        }
    //end Cahllenge 5
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
        console.log('Title:- ' + argv.title, 
                     '\nBody:- ' + argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
        console.log(argv.title + 'note is removed')
    }
})

//Challenge 4
yargs.command({
    command:'read',
    describe:'Reading a note',
    handler: () => {
        console.log('Reading a note!')
    }
})

yargs.command({
    command:'list',
    describe:'Listing notes',
    handler: () => {
        console.log('Here is list of notes!')
    }
})
// end Challenge 4
yargs.parse() // or console.log(yargs.argv) it does the same thing 







/*Challenges
console.log('Challenge 2:- ' + notes())
console.log('Challenge 3:- ' + chalk.greenBright.bold('Success!'))
console.log('Challenge 3:- ' + chalk.bgBlue('Success!'))
*/

//console.log(yargs.argv)

/*const command = process.argv[2]
if (command === 'add'){
    console.log('Adding Notes!')
}*/

/*const validator = require('validator')
 console.log('Checking validator.isEmail :- ' + validator.isEmail('jordantheripper@gmail.com'))
 console.log('Checking validator.isURL :- ' + validator.isURL('abc.com'))
*/

/*const add = require('./utils.js')
const sum = add(3,4)
console.log(sum)*/