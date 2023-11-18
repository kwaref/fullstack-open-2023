import { useState } from 'react'

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
      <div>
          filter shown with: <input name='filter' value={filter} onChange={handleChange} />
      </div>
      <h3>Add a new</h3>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input name='name' value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input name='number' value={newNumber} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person=>person.name.toLowerCase().includes(filter.toLowerCase())).map(person => <p key={person.id}>{`${person.name } ${person.number }`}</p>)}
    </div>
  )
}

export default App