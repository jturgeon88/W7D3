import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pokemonId !== nextProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(nextProps.match.params.pokemonId);
    }
  }


  render () {
    const { pokemon } = this.props;
    console.log(pokemon);

    if (!pokemon) return null;

    return (
      <section className="pokemon-detail">
        <figure>
          <img src={pokemon.img_url} alt={pokemon.name} />
        </figure>

        <ul>
          <li>
            <h2>{pokemon.name}</h2>
          </li>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
        </ul>
      </section>
    );
  }
}


export default PokemonDetail;
