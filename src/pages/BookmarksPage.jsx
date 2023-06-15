import React from "react";
import { useResolvedPath } from "react-router-dom";

const BookmarksPage = () => {
  const resolvedPath = useResolvedPath("/bookmarks");

  return (
    <div>
      <h1>Bookmarks Page</h1>
      <p>Resolved path: {resolvedPath.pathname}</p>
    </div>
  );
};

export default BookmarksPage;
