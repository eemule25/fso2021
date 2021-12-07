const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')
const morgan = require('morgan')

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

morgan.token('body', (req, res) => {
    if(req.method === 'POST') return JSON.stringify(req.body)
    return null
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if(error.name === 'CastError') {
    return response.status(400).send({error: 'malformatted id'})
  }
  next(error)
}

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
  ]

  app.get('/', (request, response) => {
      response.send('<h1>Hello world!</h1>')
  })

  app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons)
    })
  })

  app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
    .then(person => {
      if(person) {
      response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
  })

  app.get('/info', (request, response) => {
    Person.find({}).then(persons => {
      const text = `<p>Phonebook has info for ${persons.length} people</p><p>${Date()}</p>`
      response.send(text)
    })
  })

  app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
  })

  const generateId = () => {
    const id = Math.floor(Math.random() * (10000-1) + 1);
    return id;
  }

  app.post('/api/persons', (request, response) => {
    const body = request.body
    const findName = persons.find(person => person.name === body.name)

    if(!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    } else if(!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    } else if(findName) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = new Person({
        id: generateId(),
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
      response.json(savedPerson)
    })
  })

  app.put('/api/notes/:id', (request, response, next) => {
    const body = request.body

    const person = {
      name: body.name,
      number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, {new: true})
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
  })

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})