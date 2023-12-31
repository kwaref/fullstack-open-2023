import { useState, useEffect } from 'react'
import weather from './services/weather'

export const Country = ({country}) => {

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        weather.get(country.capital)
        .then(data=>{
            setWeatherData(data)
        })
    }, [country])
    


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
        <div>
            {
                weatherData ? (<>
                    <h3>Weather in {country.capital}</h3>
                    <p>Temperature: {weatherData.main.temp} Celcius</p>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={`${weatherData.weather[0].description}`} />
                    <p>Wind: {weatherData.wind.speed} m/s</p>
                </>) : null
            }
        </div>
    </>
    )
}

export const CountryList = ({ list }) => {
    const qtty = list.length

    const [details, setDetails] = useState(null)

    useEffect(() => {
      setDetails(null)
    }, [list])
    

    if (qtty === 0) {
        return null
    }
    if (qtty > 1 && qtty <= 10){
        return (
        <>
            <ul style={{listStyle: 'none', marginLeft: 0, paddingLeft: 0}}>
            {
                list.map(country => <li key={country.name.common}>{country.name.common} <button onClick={ () => setDetails(country)}>show</button></li>)
            }
            </ul>
            {
                details ? <Country country={details}/> : null
            }
        </>)
    }
    if (qtty === 1) {
        return (<Country country={list[0]} />)
    }
}