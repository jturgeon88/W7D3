import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => (
  <li>
    <Link to={`/pokemon/${poke.id}`}>
      <span>{poke.id}</span>
      <img src={poke.image_url} alt={poke.name} width="20" />
      <span>
        {poke.name}
      </span>
    </Link>
  </li>
);

export default PokemonIndexItem;
