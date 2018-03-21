import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        <ul>
          {pokemonListItems}
        </ul>
      </section>
    );
  }
}


export default PokemonIndex;
