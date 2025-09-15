import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>Error 404</h1>
      <p className="notfound-message">La página que buscas no existe.</p>
      <Link to="/" className="notfound-link">
        Volver al inicio
      </Link>
    </div>
  );
}


export default NotFound;