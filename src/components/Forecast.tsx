import { ForecastTypes } from "../hooks/useForecast"

interface ForecastProps {
  data: ForecastTypes
}

export function Forecast({data}: ForecastProps) {
  const { main, weather } = data;
  const { temp } = main;
  const { description, icon } = weather[0];
  
  const weatherDescription = [
    'Few clouds'
  ]

  function toUpperCaseFirstLetter(value: string) {
    return value[0].toUpperCase() + value.substring(1);
  }

  function translate(word: string) {
    
  }

  return(
    <div>
      <h1>Aracaju</h1>
      <p>{temp}º C</p>
      <p>{description == 'few clouds' ? 'Poucas nuvens' : toUpperCaseFirstLetter(description)}</p>
      <p>{icon}</p>
    </div>
  )
}