
<h1 align="center">OpenWeather&PokeAPI</h1>

---
<img align="right" src="https://github.com/BrunoSobralDEV/weather-pokeapi/blob/main/screenshot-mobile.png" alt="printscreen-mobile"  width="215px">


# :pushpin: Table of Contents

- :house: [About](#about)
- :dart: [Installation](#installation)
  - :gear: [Install dependencies](#install_dependencies)
  - :rocket: [Getting Started](#getting_started)
- :computer: [Techs](#techs)
- :handshake: [Contributing](#contributing)
- :scroll: [License](#license)

---

<h1 id="about">:house: About</h1>

**Challenge:** In an HTML page it must be possible to inform a city from anywhere in the world. Then, according to the weather conditions of this city, you must display a Pokémon based on its type (fire, water, electric, etc.)

- Places where the temperature is lower **(<) than 5ºC**, an **ice** pokémon must be returned.
- Places where the temperature is between **(>=) 5ºC and (<) 10ºC**, a **water** type pokémon must be returned.
- Places where the temperature is between **(>=) 12ºC and (<) 15ºC**, a **grass** type pokémon must be returned.
- Places where the temperature is between **(>=) 15ºC and (<) 21ºC**, a **ground** type pokémon must be returned.
- Places where the temperature is between **(>=) 23ºC and (<) 27ºC**, an **insect** type pokémon must be returned.
- Places where the temperature is between **(>=) 27ºC and 33ºC inclusive**, a **rock** type pokémon must be returned.
- Places where the temperature is **greater than 33ºC**, a fire type pokémon must be returned.

**For any other temperature**, you must return a **normal** type pokémon.
And, in the event that **it is raining** in the region, an **electric** pokémon must be returned, regardless of the temperature.

For more details:

- [Project Link](https://weather-pokeapi.vercel.app/)

---

<h1 id="installation">:dart: Installation</h1>

**First you need to install:**

- [Node.js](https://pt-br.nodejs.org/) (required)

  **Then in order, clone the project.**

By HTTPS, running this command:

```bash
  git clone https://github.com/BrunoSobralDEV/weather-pokeapi.git
```

Or by ssh, running this command:

```bash
  git@github.com:BrunoSobralDEV/weather-pokeapi.git
```

SSH is a secure protocol, but you need to register a key ssh in your github before.

<h2 id="install_dependencies">:hammer_and_wrench: Install dependencies</h2>

```bash
  npm install
```

<h2 id="getting_started">:rocket: Getting Started</h2>

```bash
  npm run dev
```
---

<h1 id="techs">:computer: Techs</h1>

<h2>Front-End</h2>

[![HTML5](https://img.shields.io/badge/Html-orange?style=for-the-badge&logo=Html5&logoColor=ffffff)](#)
[![CSS3](https://img.shields.io/badge/css-blue?style=for-the-badge&logo=Css3&logoColor=ffffff)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=TypeScript&logoColor=ffffff)](#)
[![React.Js](https://img.shields.io/badge/React.Js-blue?style=for-the-badge&logo=React&logoColor=ffffff)](#)
[![TailwindCss](https://img.shields.io/badge/TailwindCss-black?style=for-the-badge&logo=TailwindCss&logoColor=be65a0)](#)



<h2>Back-End</h2>

[![OpenWeather](https://img.shields.io/badge/OpenWeather-yellow?style=for-the-badge&logo=OpenWeather&logoColor=ffffff)](#)
[![PokeAPI](https://img.shields.io/badge/PokeAPI-yellow?style=for-the-badge&logo=PokeAPI&logoColor=ffffff)](#)

<h2>Testes</h2>

[![Cypress](https://img.shields.io/badge/cypress-64D3A5?style=for-the-badge&logo=cypress&logoColor=ffffff)](#) : *in the near future*;

---

<h1 id="contributing">:handshake: Contributing</h1>

Contributions, issues and feature requests are welcome! Feel free to **file a new issue** on the [Weather-pokeapi](https://github.com/BrunoSobralDEV/weather-pokeapi/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**!

---

<h1 id="license">:scroll: License</h1>
