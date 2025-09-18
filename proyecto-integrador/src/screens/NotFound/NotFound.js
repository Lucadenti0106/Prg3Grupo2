import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

function NotFound() {
  return (
    <div className="error404-container">
      <h1 className="error404-title">Error 404</h1>
      <p className="error404-text">La página que buscas no existe.</p>
      <img className="error404-img" src="/images.gif" alt="Cargando..." />
      <Link to="/" className="notfound-link">
        Volver al inicio
      </Link>
    </div>
  );
}


export default NotFound;