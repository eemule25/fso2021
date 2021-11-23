import React from 'react'

const Course = (props) => {
  return(
    <>
    {Header(props.course)}
    {Content(props.course)}
    {Total(props.course)}
    </>
  )
}

const Header = (props) => {
  return (
    <h2>
      {props.name}
    </h2>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part,i) =>
      <Part key={i} part={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Total = (props) => {
  return (
    <b>Total of {props.parts.reduce((p, c) => p + c.exercises, 0)} exercises 
    </b>
  )
}


export default Course