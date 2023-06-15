import React, { useState } from "react";
import SearchForm from "../component/SearchForm";
import LoadingSpinner from "../component/LoadingSpinner";

const SearchPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = (pokemonName) => {
    // Perform API call or any other logic for searching Pokemon
    setLoading(true);

    // Simulating API call with a timeout
    setTimeout(() => {
      setLoading(false);
      console.log(`Searching for Pokemon: ${pokemonName}`);
    }, 1500);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default SearchPage;
