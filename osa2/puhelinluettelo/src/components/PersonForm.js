import React from "react";

const PersonForm = (props) => {

    const handleNameChange = (event) => {
        console.log(event.target.value)
        props.setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        props.setNewNumber(event.target.value)
      }

    const addPerson = (event) => {
        event.preventDefault();
        if(!props.persons.find(person => person.name === props.newName)) {
          const nameObject = {
            name: props.newName,
            number: props.newNumber
          }
          props.setPersons(props.persons.concat(nameObject))
          props.setNewName('')
          props.setNewNumber('')
        } else {
          window.alert(`${props.newName} is already added to phonebook`)
        }
      }
      return (
      <form onSubmit={addPerson}>
      <div>
        name: <input value={props.newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={props.newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    )
}


export default PersonForm