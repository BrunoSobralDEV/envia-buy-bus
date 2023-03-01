import { ForecastTypes } from "../hooks/useForecast"

interface ForecastProps {
  data: ForecastTypes
}

export function Forecast({data}: ForecastProps) {
  const { main, weather } = data;
  const { temp } = main;
  const { description, icon } = weather[0];
  
  return(
    <div>
      <h1>Aracaju</h1>
      <p>{temp}º C</p>
      <p>{description}</p>
      <p>{icon}</p>
    </div>
  )
}