import { useState } from "react";
import { weatherApi } from "../lib/api";

interface Forecast {
  main: {
    temp: string;
    temp_min: string;
    temp_max: string;
  }
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
}

export function useForecast() {
  const [isError, setError] = useState<false | string>(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState<false | Forecast>(false);

  async function getForecastData(city: string) {
    try {
      const response = await weatherApi.get(`/weather`, {
        params: {
          q: city,
          appid: import.meta.env.VITE_WEATHERAPI_KEY,
        },
      });

      if(!response) throw 'error';
      return response.data;

    } catch (error) {
      console.log(error)
      setError('Cidade não encontrada')
      setLoading(false);
      return
    }
  }

  //type of pokemon
  //pokeApi

  async function submitRequest(city: string) {
    setLoading(true);
    setError(false);

    const response = await getForecastData(city);
    if(!response) return;

  }

  return { isError, isLoading, forecast, submitRequest };
}
