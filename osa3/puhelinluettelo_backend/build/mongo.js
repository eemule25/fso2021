const mongoose = require('mongoose')

if(process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.9s3ny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    id: 100,
    name: 'Testi Testaaja',
    number: '123 123 123'
})

person.save().then(response => {
    console.log('person saved!')
    mongoose.connection.close()
})