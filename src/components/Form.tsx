import { FormEvent, useState } from "react";
import pokeballImg from '../assets/pokeball.png';
import { Loading } from "./Loading";

interface Props {
  submitSearch: (value: string) => void;
  isLoading: boolean
}

export function Form({ submitSearch, isLoading }: Props) {
  const [city, setCity] = useState("");

  function handleSearchCity(event: FormEvent) {
    event.preventDefault();
    if (!city) return;
    submitSearch(city);
  }

  return (
    <form className="flex  max-w-md space-x-3" action="" onSubmit={handleSearchCity}>
      <input
        className="rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        type="text"
        aria-label="location"
        placeholder="Digite aqui o nome da cidade"
        value={city}
        onChange={e => setCity(e.target.value)}
        required
      />
      {isLoading}
      <button
        disabled={isLoading}
        type="submit"
        onClick={handleSearchCity}
        className="flex items-center justify-center bg-red-600 hover:bg-red-700 py-2 px-4 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg disabled:opacity-75 disabled:hover:bg-red-600"
      >
        {isLoading ? <Loading /> :<img src={pokeballImg} alt="" className="h-[22px]"/>}
        
      </button>
    </form>
  );
}
