import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container" style={{ backgroundImage: `url(/img/IMG_2428.jpg)`, backgroundSize: '100vh', backgroundPosition: 'center', height: '100vh', color: 'white', textAlign: 'center', paddingTop: '20%', backgroundRepeat: "no-repeat", }}>
      <h1 style={{ fontSize: '58px', fontWeight: 'bold', textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>Error 404</h1>
      <p className="notfound-message" style={{color: 'white', textShadow: '0 2px 6px rgba(0,0,0,0.7)'}}>La página que buscas no existe.</p>
      <Link to="/" className="notfound-link" style={{color: "blue", textDecoration: 'underline',textShadow: '0 2px 6px rgba(0,0,0,0.7)' }}>
        Volver al inicio
      </Link>
    </div>
  );
}


export default NotFound;