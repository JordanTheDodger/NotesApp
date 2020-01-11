const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true, // if it is true then you to provide title to work command properly
            type:'string'
        },
          body:{
            describe:'Note body',
            demandOption:true,
            type:'string'

        }
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
       
    }
})

yargs.command({
    command:'read',
    describe:'Reading a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title )
    }
})

yargs.command({
    command:'list',
    describe:'Listing notes',
    handler: () => {
        notes.listNotes()
    }
})


yargs.parse() // or console.log(yargs.argv) it does the same thing 
