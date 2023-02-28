import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApi, geoApiOptions, GEO_API_URL } from "../lib/api";

interface City {
  city: string;
  country: string;
  countryCode: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: string;
  region: string;
  regionCode: string;
  type: string;
  wikiDataId: string;
}

interface SearchData {
  value: string;
  label: string;
}

export function Search({ onSearchChange }) {
  const [searchCity, setSearchCity] = useState(null);

  function loadOptions(inputValue: string) {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=999999&namePrefix${inputValue}`,
      geoApiOptions
    )
    .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city: City) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  }

  function handleOnChange(searchData: SearchData) {
    setSearchCity(searchData);
    onSearchChange(searchData);
  }

  return (
    <AsyncPaginate
      placeholder="Nome da cidade"
      className="text-gray-700"
      debounceTimeout={600}
      value={searchCity}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}
