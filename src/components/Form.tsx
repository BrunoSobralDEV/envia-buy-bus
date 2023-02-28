import { FormEvent, useState } from "react";

export function Form() {
  const [city, setCity] = useState("");

  function handleSearchCity(event: FormEvent) {
    event.preventDefault();
    if (!city) return;
  }

  return (
    <form className="flex w-full max-w-sm space-x-3" action="" onSubmit={handleSearchCity}>
      <input
        type="text"
        aria-label="location"
        placeholder="Nome da cidade"
        value={city}
        onChange={e => setCity(e.target.value)}
        required
      />

      <button
        type="submit"
        onClick={handleSearchCity}
        className="bg-indigo-600 hover:bg-indigo-700 py-2 px-4 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
      >Buscar</button>
    </form>
  );
}
