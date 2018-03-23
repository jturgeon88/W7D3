import values from 'lodash/values';

export const selectAllPokemon = state => values(state.entities.pokemon);

export const selectPokeItems = (state, poke) => {
  console.log(poke);
  return poke ? poke.item_ids.map(id => state.entities.items[id]) : [];
};

export const selectPokemonItem = (state, itemId) => {
  return state.entities.items[itemId];
};
