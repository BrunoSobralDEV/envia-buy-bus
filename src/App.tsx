import { useState } from 'react'
import { Error } from './components/Error';
import { Forecast } from './components/Forecast';
import { Form } from './components/Form'
import { LoadingGif } from './components/Loading';
import { Search } from './components/Search';
import { useForecast } from './hooks/useForecast'
import './styles/global.css';

export function App() {
  const {isError, isLoading, forecast, submitRequest} = useForecast();

  function onSubmit(value: string) {
    submitRequest(value);
  }

  // function handleOnSearchChange(searchData) {
  //   console.log(searchData);
  // }

  return (
    <div className="w-screen h-screen flex flex-col items-center ">
      <Form submitSearch={onSubmit} />
      
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16 mx-auto my-5">
        {isLoading && <LoadingGif/>}
        {isError && <Error message={isError}/>}
        {forecast && <Forecast />}
        {/* <Search onSearchChange={handleOnSearchChange}/> */}
      </div>
    </div>
  )
}

