import React, { useState, useEffect } from "react";

import PokemonList from "../component/PokemonList";
import LoadingSpinner from "../component/LoadingSpinner";
import FilterOptions from "../component/FilterOptions";

const ListingPage = () => {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        const results = data.results;
        setPokemonList(results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (selectedFilter) => {
    setFilter(selectedFilter);
    // Apply filter logic based on selected filter
  };

  return (
    <div>
      <h1>Listing Page</h1>

      <FilterOptions onFilter={handleFilter} />
      {loading ? <LoadingSpinner /> : <PokemonList pokemonList={pokemonList} />}
    </div>
  );
};

export default ListingPage;
