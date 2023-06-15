import React from "react";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemonList }) => {
  return (
    <div>
      <h2>Pokemon List</h2>

      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/details/${pokemon.id}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
