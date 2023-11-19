import { useState, useEffect } from 'react'
import { PersonList } from './persons'
import { Filter } from './filter'
import { PersonForm } from './personform'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
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
      const person = { name: newName, number: newNumber }
      personService.create(person)
      .then(person => {
        setPersons([...persons, person])
      })
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