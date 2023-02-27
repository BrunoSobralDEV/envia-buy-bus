import { FormEvent, useState } from "react";

export function Form() {
  const [city, setCity] = useState('');

  function handleSearchCity (event: FormEvent) {
    event.preventDefault();
    if(!city) return;

    
  }

  return (
    <form action="" onSubmit={handleSearchCity}>
      <input 
        type="text" 
        aria-label="location"
        placeholder="Nome da cidade"
        value={city}
        onChange={e => setCity(e.target.value)}
        required
      />

      <button type="submit" onClick={handleSearchCity}>Buscar</button>
    </form>
  )
}