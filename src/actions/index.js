import axios from 'axios';

const API_KEY = 'f26275f9f6b0e41b9c7e146d3f23c231';
const BASE_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import {FETCH_WEATHER} from './actions'

export function fetchWeather(city) {
    const url=`${BASE_URL}$q=${city},us`;
    const response = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : response
    }
}
