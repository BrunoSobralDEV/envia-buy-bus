import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Form } from './components/Form'
import { useForecast } from './hooks/useForecast'

export function App() {
  useForecast();
  
  return (
    <div className="App">
      <Form />
    </div>
  )
}

