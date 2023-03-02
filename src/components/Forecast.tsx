import { ForecastTypes } from "../hooks/useForecast"
import { toUpperCaseFirstLetter } from "../utils/formatter";
import ashPikachu from '../assets/ash-pikachu.webp';

interface ForecastProps {
  data: ForecastTypes;
  city: string;
}

export function Forecast({data, city}: ForecastProps) {
  const { main, weather } = data;
  const { temp, temp_min, temp_max } = main;
  const { description, icon } = weather[0];
  
  return(
    <div className="text-3xl flex gap-5 mt-2" style={{backgroundImage: ashPikachu}}>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Imagem do tempo" />
      <div>
        <p className="font-bold text-7xl">{Math.round(temp)}ºC</p>
        <p>{toUpperCaseFirstLetter(description)}</p>
      </div>
    </div>
  )
}