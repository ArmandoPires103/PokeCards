# Pokémon Card Emporium
Welcome to the Pokémon Card Emporium, your one-stop destination for collecting and managing your favorite Pokémon cards. This application offers features that allows you to create, view, update, and delete items in you're cart in order to find rare cards.

![Jigglypuff](http://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif) ![Gengar](http://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif) ![Electrode](http://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif) ![Eevee](http://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif) ![Snorlax](http://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif) <a href="https://pokemondb.net/pokedex/pikachu"><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif" alt="Pikachu"></a>

## Getting Started <a href="https://pokemondb.net/pokedex/bulbasaur"><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif" alt="Bulbasaur"></a>

To dive into the world of efficient inventory management, follow these simple steps to set up your development environment and unleash the power of this application.

1. Clone the repo to your local machine.
2. Install by using `npm install`.
3. Start the application with `npm start`.


# Features

## Create <a href="https://pokemondb.net/pokedex/charmander"><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif" alt="Charmander"></a>
- User can create a new item and add to cart.
- Each item created is made with a unique ID, ensuring great management.

>Use `npm run create <pokemon-name` to add new item to the cart.
```
npm run create "Pikachu"
npm run create "Machamp"
```

## Index <a href="https://pokemondb.net/pokedex/squirtle"><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif" alt="Squirtle"></a>
- User can list all the items in the cart.
- The item with show name, id, Price in dollars and description.

>Use `npm run index` to show all the items in the cart.
```
npm run index
```

## Show <a href="https://pokemondb.net/pokedex/charizard"><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" alt="Charizard"></a>
- User can search up item with the items id.
- User can look-up release date and if the item in cart is rare.

>Use `npm run show <pokemon-id>` to show exact item in the cart with full details.
```
npm run show OGrN
```
## Update <a href="https://pokemondb.net/pokedex/blastoise"><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif" alt="Blastoise"></a>
- User can update details of any item in the cart.

>Use `npm run update <pokemon-id> <updated-pokemon-id>` to change current pokemon with different item.
```
npm run update OGrN "Bulbasaur"
```

## Destroy <a href="https://pokemondb.net/pokedex/espeon"><img src="https://img.pokemondb.net/sprites/black-white/anim/normal/espeon.gif" alt="Espeon"></a>
- User can delete specific item from the cart with unique ID.
- User can delete all items in cart.

>Use `npm run destroy <pokemon-id>` to delete item from cart.
```
npm run destroy OGrN
```
>Use `npm run destroy all` to delete every item in cart.
```
npm run destroy all
```

## Contributing

If you have any ideas for improvement or want to report issues, please open a GitHub issue and submit a pull request. Thank you and enjoy the pokeCard Application.