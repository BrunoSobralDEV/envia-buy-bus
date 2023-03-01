import { useState } from 'react'

import { PokeCard } from './components/PokeCard/PokeCard';
import { LoadingGif } from './components/Loading';
import { useForecast } from './hooks/useForecast'
import { Forecast } from './components/Forecast';
import { Error } from './components/Error';
import { Form } from './components/Form'
import './styles/global.css';

export function App() {
  const [city, setCity] = useState('');
  const {isError, isLoading, forecast, submitRequest, pokemon} = useForecast();
  
  function onSubmit(inputValue: string) {
    submitRequest(inputValue);
    setCity(inputValue);
  }
  
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* <div className='m-auto'> */}
        <Form submitSearch={onSubmit} isLoading={isLoading}/>
      {/* </div> */}
    
      <div className="w-full max-w-5xl px-6 flex flex-row items-center justify-around gap-16">
        {isLoading && <LoadingGif/>}
        {isError && <Error message={isError}/>}
        {forecast && <Forecast data={forecast} city={city}/>}
        {pokemon && <PokeCard  data={pokemon}/>}
      </div>
    </div>
  )
}

