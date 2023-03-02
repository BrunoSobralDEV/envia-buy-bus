import { toUpperCaseFirstLetter } from "../utils/formatter";
import { Pokemon } from "../hooks/useForecast";
import pokedexImg from '../assets/pokedex.png';

interface PokeCardProps {
  data: Pokemon;
  type: string;
}

export function PokeCard({data, type}: PokeCardProps) {
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
      <div 
        style={{perspective: "1000px"}} 
        className={`flip-container relative top-[111px] left-[49px] block h-[202px] w-[202px] ${bgCorlors.get(type)}`} 
      >
        <div id="flipper-front" className="flipper relative w-full h-full" style={{transition: "transform 0.8s",transformStyle: "preserve-3d"}}>
          <div className="flex flex-col items-center justify-center" style={{position: "absolute",width: "100%",height: "100%", backfaceVisibility: "hidden"}}>
            <img src={data.image} alt="" className=""/>
            
          </div>

          <div id="flipper-back" className="bg-[#56595b]" style={{transform: "rotateY(180deg)", position: "absolute",width: "100%",height: "100%", backfaceVisibility: "hidden"}}>
            <div className="grid grid-cols-1 font-sans h-full p-2">
              {data.stats.map((stat, index) => {
                return (
                  <div key={index} className="">
                    <span  className="text-red-500 font-medium">{toUpperCaseFirstLetter(stat.stat.name)}: </span>
                    <span>{stat.base_stat}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <label htmlFor="switch" className="btn btn-green absolute top-[405px] left-[75px] h-[47px] w-[103px] border-black rounded-md flex items-center justify-center font-sans" role="button">Info</label>
          
      <span className="absolute top-[323px] left-[93px] text-red-800 font-sans font-medium">
        {toUpperCaseFirstLetter(data.name)}
      </span>

      <div>
        <span className="absolute top-[59px] right-[35px] bg-gray-200 rounded-full px-3 py-1 text-sm font-sans font-semibold text-gray-700 mr-2 mb-2">
          {type}
        </span>
      </div>
      
    </div>
  )
}