import { useState, useEffect } from 'react'
import countryService from './services/countries'
import { Filter } from './filter'
import { Notification } from './notification'
import { CountryList } from './countrylist'

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([])
  const [message, setMessage] = useState(null)

  useEffect(() => {
    countryService.getAll()
    .then(countries=>{
      setCountries(countries)
    })
  }, [])

  useEffect(() => {
    if (filter && filter.trim() !== '') {
      const newFiltered = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase().trim()))
      setFiltered(newFiltered)
    } else {
      setFiltered([])
    }
  }, [filter])

  useEffect(() => {
    const qtty = filtered.length
    if (qtty > 10) {
      setMessage('Too many matches, specify another filter')
    } else {
      setMessage(null)
    }
  }, [filtered])
  
  

  const handleChange = (evt) => {
    const { name, value } = evt.target
    if (name === 'filter') {
      setFilter(value)
    }
  }
  

  return (
    <>
      <Filter value={filter} handleChange={handleChange}/>
      <Notification message={message} />
      <CountryList list={filtered} />
    </>
  )
}

export default App
