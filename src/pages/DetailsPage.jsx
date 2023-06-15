import React from "react";
import { useParams, useResolvedPath } from "react-router-dom";

const DetailsPage = () => {
  const { pokemonId } = useParams();
  const resolvedPath = useResolvedPath(`/details/${pokemonId}`);

  return (
    <div>
      <h1>Details Page</h1>
      <p>Pokemon ID: {pokemonId}</p>
      <p>Resolved path: {resolvedPath.pathname}</p>
    </div>
  );
};

export default DetailsPage;
