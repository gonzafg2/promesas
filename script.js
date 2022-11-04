// async await: Dos palabras reservadas del lenguaje
// Nos van a permitir trabajar con promesas: Incluyendo estas palabras reservadas vamos a poder saber si una promesa se cumplió o no

// async transforma una función síncrona en asíncrona
const getData = async (url) => {
  // http request (Consulta o Petición HTTP) => get, post, put, delete, patch, etc...
  // await me permite esperar que se resuelva una promesa
  const pokemones = await fetch(url)
  return pokemones;
}

const data = async () => { 
  const URL_Pokemon = "https://pokeapi.co/api/v2/pokemon/";
  const pokemones = await getData(URL_Pokemon);
  console.log(pokemones);
}

// data()

// O podríamos hacer todo dentro de una función asíncrona
const getPokemones = async () => {
  const URL_Pokemon = "https://pokeapi.co/api/v2/pokemon/";

  try {
    const pokemones = await fetch(URL_Pokemon);
    const pokeData = await pokemones.json();
    // const pokeNames = pokeData.results.map(poke => poke.name.toUpperCase());
    console.log(pokeData.results);
  } catch (error) {
    console.log("El error es: ", error);
  }
};

getPokemones();