import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// Test
import * as APIUtil from './util/api_util';
import * as PokemonActions from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  //FOR TESTING:
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.receiveAllPokemon = PokemonActions.receiveAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
