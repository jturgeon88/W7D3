import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PokemonDetailContainer from './pokemon_detail_container';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;
    const pokemonListItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} />);
    return (
      <section className="pokedex">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul>
          {pokemonListItems}
        </ul>
      </section>
    );
  }
}


export default PokemonIndex;
