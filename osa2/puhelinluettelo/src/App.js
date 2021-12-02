import React, {useState, useEffect} from 'react'
import PersonForm from "./components/PersonForm";
import Filter from './components/Filter';
import Persons from './components/Persons';
import personTool from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    personTool
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Filter show={show} setShow={setShow} persons={persons} showAll={showAll} setShowAll={setShowAll} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setNewName={setNewName} setNewNumber={setNewNumber} 
      newName={newName} newNumber={newNumber} setPersons={setPersons} setSuccessMessage={setSuccessMessage} />
      <h2>Numbers</h2>
      <Persons persons={persons} show={show} setPersons={setPersons} setSuccessMessage={setSuccessMessage} />
    </div>
  );
}

export default App;
