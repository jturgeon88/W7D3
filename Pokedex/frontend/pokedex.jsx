import React from 'react';
import ReactDOM from 'react-dom';

// Test
import * as APIUtil from './util/api_util';
import * as PokemonActions from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.receiveAllPokemon = PokemonActions.receiveAllPokemon;
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
