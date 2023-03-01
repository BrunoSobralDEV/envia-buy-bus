import { ForecastTypes } from "../hooks/useForecast"

interface ForecastProps {
  data: ForecastTypes;
  city: string;
}

export function Forecast({data, city}: ForecastProps) {
  const { main, weather } = data;
  const { temp } = main;
  const { description, icon } = weather[0];
  
  const weatherDescription = {
    'thunderstorm': '',
    'drizzle': '',
    'cain': '',
    'cnow': '',
    'clear': '',
    'clouds': '',
    'Scattered clouds': 'Nuvens dispersas',
    'few clouds': 'Poucas nuvens',
    'thunderstorm with light rain': 'Trovoada com chuva leve'
  }
  
  console.log(weatherDescription)
  function toUpperCaseFirstLetter(value: string) {
    return value[0].toUpperCase() + value.substring(1);
  }

  function translate(word: string) {
    
  }

  return(
    <div>
      <h1>{toUpperCaseFirstLetter(city)}</h1>
      <p>{temp}º C</p>
      <p>{description == 'few clouds' ? 'Poucas nuvens' : toUpperCaseFirstLetter(description)}</p>
      <p>{icon.slice(-1) == 'n' ? 'Noite' : 'Dia'}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
    </div>
  )
}