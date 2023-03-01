import axios from "axios";

export const weatherApi  = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5"
})

export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
})

export const geoApi = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo"
})

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

