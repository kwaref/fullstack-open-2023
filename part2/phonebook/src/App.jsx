import { useState, useEffect } from 'react'
import { PersonList } from './persons'
import { Filter } from './filter'
import { PersonForm } from './personform'
import personService from './services/persons'
import { Notification } from './notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [error, setError] = useState(false)

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])


  const handleSubmit = (evt) => {
    evt.preventDefault()
    const found = persons.find(p => p.name === newName)
    if (!found) {
      const person = { name: newName, number: newNumber }
      personService.create(person)
      .then(person => {
        setPersons([...persons, person])
        setNotificationMessage(`Added ${person.name}`)
        setTimeout(()=>{
          setNotificationMessage(null)
        }, 3000)
      })
    } else {
      const result = confirm(`${newName} is already added to phonebook, replace the old number with this one?`)
      if (result) {
        personService.update(found.id, { name: newName, number: newNumber })
        .then(person => {
          const newPersons = persons.map( p => p.id === person.id ? person : p)
          setPersons(newPersons)
          setNotificationMessage(`Modified ${person.name}'s number`)
          setTimeout(()=>{
            setNotificationMessage(null)
          }, 3000)
        })
        .catch(err => {
          setError(true)
          setNotificationMessage(`Information of ${found.name} has already been removed from server`)
          setTimeout(()=>{
            setNotificationMessage(null)
            setError(false)
            const newPersons = persons.filter(p=>p.id!==found.id)
            setPersons(newPersons)
          }, 3000)
        })
      }
    }
    setNewName('')
    setNewNumber('')
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

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    const result = confirm(`Delete ${person.name}`)
    if (result) {
      personService.eliminate(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} error={error} />
      <Filter value={filter} handleChange={handleChange}/>
      <h3>Add a new</h3>
      <PersonForm name={newName} number={newNumber} handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <PersonList persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App