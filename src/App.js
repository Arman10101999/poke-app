import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import ListingPage from "./pages/ListingPage";
import DetailsPage from "./pages/DetailsPage";
import BookmarksPage from "./pages/BookmarksPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/details/:pokemonId" element={<DetailsPage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
