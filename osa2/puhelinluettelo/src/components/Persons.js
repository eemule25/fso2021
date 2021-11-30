import React from "react";
import personTool from '../services/persons';

function deletePerson(person, props, id) {
    const result = window.confirm(`Delete ${person.name}?`)
    if(result) {
        personTool
        .remove(id)
        props.setPersons(props.persons.filter(p => p.id !== id))
        window.alert(`${person.name} deleted!`)
        }
}

const Persons = (props) => {

    const personstoShow = props.showAll
    ? props.persons
    : props.persons.filter(person => person.name.toLowerCase().includes(props.show.toLowerCase()))

    return (
        personstoShow.map(person =>
            <div key={person.id}>{person.name} {person.number} 
             <button onClick={() => deletePerson(person, props, person.id)}>delete</button>
            </div>)
    )
    }


export default Persons