import { Pokemon } from "../../hooks/useForecast";
import { toUpperCaseFirstLetter } from "../../utils/formatter";
import { PokeStats } from "./PokeStats";

interface PokeCardProps {
  data: Pokemon
}

export function PokeCard({data}: PokeCardProps) {
  return(
    <div className="flex flex-col items-center border">
      <img src={data.image} alt="" />
      <span>{toUpperCaseFirstLetter(data.name)}</span>

      <div>
        {data.type && data.type.map((type, index) => {
          return <span key={index} className="border mr-1">{type.type.name}</span>
        })}
      </div>

      <div className="grid grid-cols-2 px-3">
        {data.stats.map((stat, index) => {
          return (
            <span key={index}>{stat.stat.name}: {stat.base_stat}</span>
          )
        })}
      </div>
    </div>
  )
}