import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    const { pokemon } = this.props;
    const pokemonListItems = pokemon.map(poke => (
        <li key={`pokemon-list-item${poke.id}`}>
          <p>
            {poke.name}
          </p>
          <img src={poke.image_url} alt="small pokemon pic" width="20" />
        </li>
      )
    );

    return (
      <ul>
        {pokemonListItems}
      </ul>
    );
  }
}


export default PokemonIndex;
