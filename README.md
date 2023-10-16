# Pokémon Card Emporium
Welcome to the Pokémon Card Emporium, your one-stop destination for collecting and managing your favorite Pokémon cards. This application offers features that allows you to create, view, update, and delete items in you're cart in order to find rare cards.


# Features

## Create 
- User can create a new item and add to cart.
- Each item created is made with a unique ID, ensuring great management.

>Use `npm run create <pokemon-name` to add new item to the cart.
```
npm run create "Pikachu"
npm run create "Machamp"
```

## Index 
- User can list all the items in the cart.
- The item with show name, id, Price in dollars and description.

>Use `npm run index` to show all the items in the cart.
```
npm run index
```

## Show
- User can search up item with the items id.
- User can look-up release date and if the item in cart is rare.

>Use `npm run show <pokemon-id>` to show exact item in the cart with full details.
```
npm run show OGrN
```
## Update
- User can update details of any item in the cart.

>Use `npm run update <pokemon-id> <updated-pokemon-id>` to change current pokemon with different item.
```
npm run update OGrN "Bulbasaur"
```

## Destroy 
- User can delete specific item from the cart with unique ID.

>Use `npm run destroy <pokemon-id>` to delete item from cart.
```
npm run destroy OGrN
```