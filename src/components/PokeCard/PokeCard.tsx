import { toUpperCaseFirstLetter } from "../../utils/formatter";
import { Pokemon } from "../../hooks/useForecast";
import pokedexImg from '../../assets/pokedex.png';
import pokedexMinImg from '../../assets/pokedex.png';

interface PokeCardProps {
  data: Pokemon
}

export function PokeCard({data}: PokeCardProps) {
  const bgCorlors = new Map([
    ["water", "bg-[#50B0D8]"],
    ["ice", "bg-[#8CD3E3]"],
    ["bug", "bg-[#BAE05F]"],
    ["grass", "bg-[#7BC64B]"],
    ["electric", "bg-[#F6CF2B]"],
    ["fire", "bg-[#F8A060]"],
    ["ground", "bg-[#a86644]"],
    ["rock", "bg-[#A38C21]"],
    ["neutral", "bg-[#DBDBDB]"],
  ]);

  const typePokemon = data.type ? data.type[data.type.length -1].type.name : 'neutral';

  return(
    <div className="relative w-72">
      <img src={pokedexImg} alt=""  className="absolute top-0"/>

      <input type="checkbox" id="switch" style={{display: "none"}}/>
      <label 
        style={{perspective: "1000px"}} 
        className={`relative top-[111px] left-[50px] flip-container block h-[202px] w-[201px] ${bgCorlors.get(typePokemon)} cursor-pointer`} 
        htmlFor="switch"
      >
        <div className="flipper relative w-full h-full" style={{transition: "transform 0.8s",transformStyle: "preserve-3d"}}>
          <div className="flex flex-col items-center justify-center" style={{position: "absolute",width: "100%",height: "100%", backfaceVisibility: "hidden"}}>
            <img src={data.image} alt="" className=""/>
            <span className="absolute top-[214px] left-[41px] text-red-800">{toUpperCaseFirstLetter(data.name)}</span>

            <div>
              {data.type && data.type.map((type, index) => {
                return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{type.type.name}</span>
              })}
            </div>
          </div>

          <div className="" style={{transform: "rotateY(180deg)", position: "absolute",width: "100%",height: "100%", backfaceVisibility: "hidden"}}>
            <div className="grid grid-cols-2">
              {data.stats.map((stat, index) => {
                return (
                  <span key={index}>{stat.stat.name}: {stat.base_stat}</span>
                )
              })}
            </div>
          </div>
        </div>
      </label>
    </div>
  )
}