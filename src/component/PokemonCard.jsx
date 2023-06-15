import React from "react";
import { Link, useResolvedPath } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const resolvedPath = useResolvedPath("/");

  return (
    <div>
      <h3>{pokemon.name}</h3>
      <p>Resolved path: {resolvedPath.pathname}</p>
      <Link to={`/details/${pokemon.id}`}>View Details</Link>
    </div>
  );
};

export default PokemonCard;
