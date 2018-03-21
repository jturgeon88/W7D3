import React from 'react';

const PokemonIndexItem = ({ poke }) => (
  <li>
    <span>{poke.id}</span>
    <img src={poke.image_url} alt={poke.name} width="20" />
    <span>
      {poke.name}
    </span>
  </li>
);

export default PokemonIndexItem;
