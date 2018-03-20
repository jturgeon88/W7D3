import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// Test
// import * as APIUtil from './util/api_util';
// import * as PokemonActions from './actions/pokemon_actions';
// import { selectAllPokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  //FOR TESTING:
  // window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  // window.requestAllPokemon = PokemonActions.requestAllPokemon;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.selectAllPokemon = selectAllPokemon;

  ReactDOM.render(<Root store={store}/>, rootEl);
});
