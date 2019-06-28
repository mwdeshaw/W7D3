import React from 'react';
import { Route, Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => (
    <li>
      <img src={pokemon.image_url} />
      <Link to={`/pokemon/${pokemon.id}`}>
        {pokemon.name}
      </Link>
    </li>
);

export default PokemonIndexItem;