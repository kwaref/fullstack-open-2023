import React from 'react'

export const Country = ({country}) => {
  return (
    <>
        <h1>
            {country.name.common}
        </h1>
        <p style={{margin: 0}}>Capital: {country.capital}</p>
        <p style={{margin: 0}}>Area: {country.area} km<sup>2</sup></p>
        <h3>
            Languages:
        </h3>
        <ul>
        {
            Object.values(country.languages).map(language => <li key={language}>{language}</li>)
        }
        </ul>
        <div>{country.flag}</div>
    </>
  )
}

export const CountryList = ({ list }) => {
    const qtty = list.length
    if (qtty === 0) {
        return null
    }
    if (qtty > 1 && qtty <= 10){
        return (<ul style={{listStyle: 'none', marginLeft: 0, paddingLeft: 0}}>
        {
            list.map(country => <li key={country.name.common}>{country.name.common}</li>)
        }
        </ul>)
    }
    if (qtty === 1) {
        return (<Country country={list[0]} />)
    }
}