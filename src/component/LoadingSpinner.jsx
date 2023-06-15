import React from "react";
import { useResolvedPath } from "react-router-dom";

const LoadingSpinner = () => {
  const resolvedPath = useResolvedPath("/");

  return (
    <div>
      <p>Loading...</p>
      <p>Resolved path: {resolvedPath.pathname}</p>
    </div>
  );
};

export default LoadingSpinner;
