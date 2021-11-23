import React, {useState, useEffect} from 'react'
import PersonForm from "./components/PersonForm";
import Filter from './components/Filter';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter show={show} setShow={setShow} persons={persons} showAll={showAll} setShowAll={setShowAll} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} show={show} />
    </div>
  );
}

export default App;
