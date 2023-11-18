import { useState } from 'react'
import { PersonList } from './persons'
import { Filter } from './filter'
import { PersonForm } from './personform'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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