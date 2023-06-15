import React, { useState } from "react";
import { useResolvedPath } from "react-router-dom";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const resolvedPath = useResolvedPath("/search");

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic using the searchTerm
    console.log(`Searching for: ${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Pokemon name"
      />
      <button type="submit">Search</button>
      <p>Resolved path: {resolvedPath.pathname}</p>
    </form>
  );
};

export default SearchForm;
