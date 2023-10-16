const { nanoid } = require('nanoid');

const pokemonPrice = require('../data/pokemonPrice.json');

const inform = console.log;

function create(pokemonCards, pokemonName) {
  const foundPokemon = pokemonPrice.find((pokemon) => pokemon.name === pokemonName);

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
  return pokemonCards.map((pokemon) => pokemon.id + ' ' + pokemon.name + ' $' + (pokemon.priceInCents/100).toFixed(2)).join('\n');
}

function show(pokemonCards, pokemonId) {
    
  const pokemon = pokemonCards.find((pokemon) => pokemon.id === pokemonId);

  if (pokemon) {
    return pokemon.id + ' ' + pokemon.name + ' ' + pokemon.priceInCents + ' cents - ' + pokemon.description;
  } else {
    return 'PokemonCard not found.';
  }
}

function destroy(pokemonCards, pokemonId) {
  const index = pokemonCards.findIndex((pokemon) => pokemon.id === pokemonId);

  if (index > -1) {
    pokemonCards.splice(index, 1);
    inform('PokemonCard successfully removed from the collection');
  } else {
    inform('PokemonCard not found. No action taken');
  }

  return pokemonCards;
}

function update(pokemonCards, pokemonId, updatedPokemon) {
    const index = pokemonCards.findIndex((pokemon) => pokemon.id === pokemonId);

    if (index > -1) {
      const foundUpdatedPokemon = pokemonPrice.find((pokemon) => pokemon.name === updatedPokemon);

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