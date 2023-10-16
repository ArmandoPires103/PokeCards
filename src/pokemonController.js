///IMPORTS
const { nanoid } = require('nanoid');
const pokemonPrice = require('../data/pokemonPrice.json');
const inform = console.log;

function create(pokemonCards, pokemonName) {
// USE FIND METHOD TO SEARCH THROUGH POKEMONPRICE ARRAY
  const foundPokemon = pokemonPrice.find((pokemon) => pokemon.name === pokemonName);
// IF FOUND PROCEEDS TO CREATE A NEW POKEMON.
  if (foundPokemon) {
    const pokemon = {
      name: pokemonName,
      id: nanoid(4),
      priceInCents: foundPokemon.priceInCents,
      description: foundPokemon.description,
      rare: foundPokemon.rare
    };
    pokemonCards.push(pokemon);
    inform('PokemonCard successfully added to the collection');
  } else {
    inform('PokemonCard not found. No action taken.');
  }

  return pokemonCards;
}

function index(pokemonCards) {
// MAP METHOD TO ITERATE OVER EACH POKEMON IN POKEMONCARDS AND TRANSFORM IT WITH PROVIDED FUNCTION.
  return pokemonCards.map((pokemon) => pokemon.id + ' ' + pokemon.name + ' $' + (pokemon.priceInCents/100).toFixed(2)).join('\n');
// .JOIN IT TO MAKE IT INTO A SINGLE STRING.
}

function show(pokemonCards, pokemonId) {
// FIND METHOD TO SERACH FOR POKEMON IN POKEMONCARD, THE CONDITION IS IF THE ID SHOULD MATCH PROVIDED ID
  const pokemon = pokemonCards.find((pokemon) => pokemon.id === pokemonId);
// IF A POKEMON ID IS FOUND, IT PROCEEDS TO CREATE FORMATTED STRING.
  if (pokemon) {
    return pokemon.id + ' ' + pokemon.name + ' ' + pokemon.priceInCents + ' cents - ' + pokemon.description;
  } else {
    return 'PokemonCard not found.';
  }
}

function destroy(pokemonCards, pokemonId) {
// DELETES ALL ITEMS IN CART. MADE A EMPTY ARRAY.
    if (pokemonId === "all"){
        return pokemonCards = []
    }
// FINDINDEX METHOD TO SEARCH FOR POKEMON IN POKEMONCARDS, THE CONDITION IS IF ID MATCH PROVIDED ID
  const index = pokemonCards.findIndex((pokemon) => pokemon.id === pokemonId);
// IF THE INDEX IS GREATER THAN -1, IT MEANS THE POKEMON WITH SPECIFIED ID WAS FOUND IN THE ARRAY
  if (index > -1) {
// USE SPLICE METHOD TO REMOVE ONE ELEMENT.
    pokemonCards.splice(index, 1);
    inform('PokemonCard successfully removed from the collection');
  } else {
    inform('PokemonCard not found. No action taken');
  }

  return pokemonCards;
}

function update(pokemonCards, pokemonId, updatedPokemon) {
// FINDINDEX METHOD TO SERACH FOR POKEMON IN POKEMONCARDS, THIS CONDITION IS IF THE ID MATCH PROVIDED ID
    const index = pokemonCards.findIndex((pokemon) => pokemon.id === pokemonId);
// IF THE INDEX IS GREATER THAN -1, IT MEANS THE POKEMON WITH SPECIFIED ID WAS FOUND IN THE ARRAY
    if (index > -1) {
// FIND METHOD TO SEARCH IN POKEMON PRICE ARRAY, CONDITION IS POKEMON NAME WHICH SHOULD MATCH UPDATEDPOKEMON
      const foundUpdatedPokemon = pokemonPrice.find((pokemon) => pokemon.name === updatedPokemon);
// IT WILLUPDATE WITH THE LIST BELOW.
      pokemonCards[index].name = updatedPokemon;
      pokemonCards[index].priceInCents = foundUpdatedPokemon ? foundUpdatedPokemon.priceInCents : 10;
      pokemonCards[index].description = foundUpdatedPokemon ? foundUpdatedPokemon.description : '';

      inform('PokemonCard successfully updated');
    } else {
      inform('PokemonCard not found. No action taken');
    }

    return pokemonCards;
}
  


module.exports = {
  create,
  index,
  show,
  destroy,
  update,
};