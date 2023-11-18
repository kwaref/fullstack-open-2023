import { useState } from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <h4>{`total of ${sum} exercises`}</h4>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />      
  </>

const Course = ({course}) => {

  const sum = () => {
    return course.parts.reduce((ac, part) => ac + part.exercises, 0)
  }

  return (<>
    <Header course={course.name} />
    {course.parts.map(part => <Part key={part.name} part={part}/>)}
    <Total sum={sum()} />
  </>)
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (<>
  <Header course={'Web development curriculum'} />
  {courses.map(course => <Course key={course.name} course={course} />)}
  </>
  )
}

export default App
