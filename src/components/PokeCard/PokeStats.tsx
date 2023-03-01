import { Pokemon } from "../../hooks/useForecast";

type PokeStatsProps = Omit<Pokemon, 'name' | 'image'>;

export function PokeStats({stats, type}: PokeStatsProps) {
  return (
    <>
      <p>{stats}</p>
      <p>data.type</p>
    </>
  )
}