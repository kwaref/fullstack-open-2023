import { useState } from 'react'

export const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <h4>{`total of ${sum} exercises`}</h4>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

export const Course = ({course}) => {

  const sum = () => {
    return course.parts.reduce((ac, part) => ac + part.exercises, 0)
  }

  return (<>
    <Header course={course.name} />
    {course.parts.map(part => <Part key={part.name} part={part}/>)}
    <Total sum={sum()} />
  </>)
}