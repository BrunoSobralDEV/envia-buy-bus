import { useState } from 'react'

import { PokeCard } from './components/PokeCard';
import { LoadingGif } from './components/Loading';
import { useForecast } from './hooks/useForecast'
import { Forecast } from './components/Forecast';
import { Error } from './components/Error';
import { Form } from './components/Form'
import './styles/global.css';
import pokemonsImg from './assets/pokemons.png';
import pokemonsBg from './assets/Pokémon-wallpapers-5.jpg';
import weatherLogoImg from './assets/logo_white_weather.png';
import pokeApiLogoImg from './assets/logo_pokeapi.png';

export function App() {
  const [city, setCity] = useState('');
  const {isError, isLoading, forecast, submitRequest, pokemon, typeOfPokemon} = useForecast();
  
  function onSubmit(inputValue: string) {
    submitRequest(inputValue);
    setCity(inputValue);
  }
  
  console.log('apikey:',import.meta.env.VITE_WEATHERAPI_KEY)

  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <img className={`absolute left-0 top-0 h-full w-full object-cover md:object-fill opacity-80 z-[-1] ${forecast && 'blur-sm'}`} src={pokemonsBg} alt="Pokemons" />
      
      <header className='w-full flex justify-around mt-3'>
        <a href="https://openweathermap.org/api" target="_blank" className='hidden  md:block'>
          <img src={weatherLogoImg} alt="" className='h-11'/>
        </a>
        <Form submitSearch={onSubmit} isLoading={isLoading}/>
        <a href="https://pokeapi.co/docs/v2" target="_blank" className='hidden md:block'>
          <img src={pokeApiLogoImg} alt="" className='h-11'/>
        </a>
      </header>
    
      <div className={`w-full ${!forecast && 'h-full'} max-w-5xl px-6 flex flex-col items-center justify-around md:gap-5`}>
        {isLoading && <LoadingGif/>}
        {isError && <Error message={isError}/>}
        {forecast && <Forecast data={forecast} city={city}/>}
        {pokemon && <PokeCard  data={pokemon} type={typeOfPokemon}/>}
      </div>
    </div>
  )
}

