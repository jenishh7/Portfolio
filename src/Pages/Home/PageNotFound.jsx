import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to="/" className="go-home">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
