import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const notIn = (str) => {
    const names = persons.map( person => person.name.toLowerCase())
    return !names.includes(str.toLowerCase())
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (notIn(newName)) {
      setPersons([...persons, { name: newName, number: newNumber }])
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
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => <p key={person.name}>{`${person.name } ${person.number }`}</p>)}
    </div>
  )
}

export default App