//const add = require('./utils.js')

//const sum = add(4, -2)

//console.log(sum)
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a note!')
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: function () {
        console.log('Removing a note!')
    }
})
console.log(yargs.argv)