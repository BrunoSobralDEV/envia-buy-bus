import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Form } from './components/Form'
import { useForecast } from './hooks/useForecast'
import './styles/global.css';

export function App() {
  const {isError, isLoading, forecast} = useForecast();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16 mx-auto my-5">
        <Form />
      </div>
    </div>
  )
}

