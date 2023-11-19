import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const get = (location) => {
    const request = axios.get(`${baseUrl}?q=${location}&APPID=${import.meta.env.VITE_API_KEY}&units=metric`)

    return request.then(response => response.data)
}

export default { 
    get
}