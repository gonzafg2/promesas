const getData2 = () => { 
  const pokemones = fetch("https://pokeapi.co/api/v2/pokemon/");
  return pokemones;
}

// Ocupar dos métodos llamados .then() y .catch()
// .then() => Se ejecuta cuando la promesa se cumple
// .catch() => Se ejecuta cuando la promesa no se cumple (Error)

const pokeArray = [];

getData2()
  .then((res) => {
    //console.log("La respuesta satisfactoria es: ", res);
    //pokeArray.push(res);
    
  })
  .catch((error) => {
    //console.log("El error es: ", error);
  });
  
// console.log("pokeArray es: ", pokeArray);