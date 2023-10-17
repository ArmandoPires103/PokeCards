//IMPORTS
const { readJSONFile, writeJSONFile } = require('./src/helpers');
const pokemonCards = readJSONFile('./data', 'pokemon.json');
const { create, index, show, update, destroy } = require('./src/pokemonController');
// REASSIGNS CONSOLE.LOG TO BE CALLED INFORM.
const inform = console.log;
// FUNCTION RUN EXECUTES DIFFERENT ACTIONS BASED ON COMMAND LINE.
function run() {
//COMMAND LINE ARGUMENTS FOR AXTION AND POKEMON.
  const action = process.argv[2];
  const pokemon = process.argv[3];

  let writeToJSONFile = false;
  let updatedPokemonCards = [];
//PERFORMS DIFFERENT ACTIONS.
  switch (action) {
    case 'index':
        const pokemonsView = index(pokemonCards);
        inform(pokemonsView);
        break;
    case 'create':
        updatedPokemonCards = create(pokemonCards, pokemon);
        writeToJSONFile = true;
        break;
    case 'show':
      const pokemonView = show(pokemonCards, pokemon)
      inform(pokemonView);
      break;
    case 'update':
      updatedPokemonCards = update(pokemonCards, pokemon, process.argv[4]);
      writeToJSONFile = true;
      break;
    case 'destroy':
      updatedPokemonCards = destroy(pokemonCards, pokemon);
      writeToJSONFile = true;
      break;
      default:
      inform('There was an error.');
  }
  if (writeToJSONFile) {
    writeJSONFile('./data', 'pokemon.json', updatedPokemonCards);
  }
}
//EXECUTES THE SPECIFIC ACTION.
run();
