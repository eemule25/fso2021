import React from "react";

const Persons = (props) => {

    const personstoShow = props.showAll
    ? props.persons
    : props.persons.filter(person => person.name.toLowerCase().includes(props.show.toLowerCase()))

    return (
        personstoShow.map(person =>
            <div key={person.name}>{person.name} {person.number}</div>)
    )
    }


export default Persons