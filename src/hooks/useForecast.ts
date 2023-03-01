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
  
  // pokeApi

  async function submitRequest(city: string) {
    setLoading(true);
    setError(false);

    const response = await getForecastData(city);
    if(!response) return;
    
    setForecast(response);
    setLoading(false);

  }

  return { isError, isLoading, forecast, submitRequest };
}
