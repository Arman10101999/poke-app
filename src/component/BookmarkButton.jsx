import React, { useState } from "react";
import { useResolvedPath } from "react-router-dom";

const BookmarkButton = ({ pokemonId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const resolvedPath = useResolvedPath("/");

  const handleBookmarkToggle = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleBookmarkToggle}>
        {isBookmarked ? "Unbookmark" : "Bookmark"}
      </button>
      <p>Resolved path: {resolvedPath.pathname}</p>
    </div>
  );
};

export default BookmarkButton;
