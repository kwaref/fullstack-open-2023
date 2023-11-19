import { useState, useEffect } from 'react'
import { PersonList } from './persons'
import { Filter } from './filter'
import { PersonForm } from './personform'
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const notIn = (str) => {
    const names = persons.map( person => person.name.toLowerCase())
    return !names.includes(str.toLowerCase())
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (notIn(newName)) {
      setPersons([...persons, { name: newName, number: newNumber, id: persons.length > 0 ? persons[persons.length-1].id + 1 : 1}])
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    if (name === 'name') {
      setNewName(value)
    } else if (name === 'number') {
      setNewNumber(value)
    } else if (name === 'filter') {
      setFilter(value)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handleChange={handleChange}/>
      <h3>Add a new</h3>
      <PersonForm name={newName} number={newNumber} handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <PersonList persons={persons} filter={filter} />
    </div>
  )
}

export default App