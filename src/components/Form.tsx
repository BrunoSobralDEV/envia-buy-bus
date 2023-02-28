import { FormEvent, useState } from "react";

interface Props {
  submitSearch: (value: string) => void;
}

export function Form({ submitSearch }: Props) {
  const [city, setCity] = useState("");

  function handleSearchCity(event: FormEvent) {
    event.preventDefault();
    if (!city) return;
    submitSearch(city);
  }

  return (
    <form className="flex w-full max-w-md space-x-3 mt-5" action="" onSubmit={handleSearchCity}>
      <input
        className="rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
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
