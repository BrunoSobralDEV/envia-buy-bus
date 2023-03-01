import { useState } from "react";
import { weatherApi } from "../lib/api";

export interface ForecastTypes {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

export function useForecast() {
  const [isError, setError] = useState<false | string>(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState<false | ForecastTypes>(false);

  async function getForecastData(city: string) {
    try {
      const { data } = await weatherApi.get(`/weather`, {
        params: {
          q: city,
          units: 'metric',
          appid: import.meta.env.VITE_WEATHERAPI_KEY,
        },
      });
      
      if(!data) throw 'error';
      const forecastData: ForecastTypes = {
        main: data.main,
        weather: data.weather
      }
      return forecastData;

    } catch (error) {
      console.clear();
      setError('Cidade não encontrada')
      setLoading(false);
      return
    }
  }

  // type of pokemon
  async function getTypeOfPokemon(temperature: number, isRain: string) {
    if(isRain.toLocaleLowerCase().includes('rain')) return 'eletric'
    if(temperature < 5)  return 'ice';
    if(temperature >= 5 && temperature < 10)  return 'water';
    if(temperature >= 12 && temperature < 15)  return 'grass';
    if(temperature >= 15 && temperature < 21)  return 'ground';
    if(temperature >= 23 && temperature < 27)  return 'bug';
    if(temperature >= 27 && temperature <= 33)  return 'rock';
    if(temperature > 33)  return 'fire';
    return 'neutral'
  }

  // pokeApi
  async function getPokeData() {

  }

  async function submitRequest(city: string) {
    setLoading(true);
    setError(false);

    const response = await getForecastData(city);
    if(!response) return;
    const temperature = Math.round(response.main.temp);
    const isRain = response.weather[0].description;
    const typeOfPokemon = await getTypeOfPokemon(temperature, isRain);
    console.log(typeOfPokemon);

    
    setForecast(response);
    setLoading(false);

  }

  return { isError, isLoading, forecast, submitRequest };
}
