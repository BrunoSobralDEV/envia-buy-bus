import axios from "axios";

export const weatherApi  = axios.create({
  baseURL: "https://"
})

export const pokeApi = axios.create({
  baseURL: "https://"
})