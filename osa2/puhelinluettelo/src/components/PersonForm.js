import React from "react";
import personTool from '../services/persons';

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
        const findPerson = props.persons.find(person => person.name === props.newName);
        if(!findPerson) {
          const nameObject = {
            name: props.newName,
            number: props.newNumber
          }

          personTool
            .create(nameObject)
            .then(returnedPerson => {
              props.setPersons(props.persons.concat(returnedPerson))
              props.setNewName('')
              props.setNewNumber('')
            })
            
          props.setSuccessMessage(`Added ${nameObject.name}`)
          setTimeout(() => {
            props.setSuccessMessage(null)
          }, 3000);

        } else {
          const result = window.confirm(`${props.newName} is already added to phonebook, replace the old number with a new one?`)
          if(result) {
            const updatedObject = { ...findPerson, number: props.newNumber}

            personTool
            .update(findPerson.id, updatedObject)
            .then(returnedPerson => {
              props.setPersons(props.persons.map(person => person.id !== findPerson.id ? person : returnedPerson))
            })
            .catch(error => {
              props.setSuccessMessage(`Information of ${updatedObject.name} has already been removed from server`)
            })

            props.setSuccessMessage(`Person's ${updatedObject.name} number updated`)
            setTimeout(() => {
              props.setSuccessMessage(null)
            }, 3000);
          }
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