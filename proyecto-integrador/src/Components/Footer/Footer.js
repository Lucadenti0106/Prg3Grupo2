import React from "react";
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
        <h4>RodeCo Movies</h4>
        <p>RodeCo es por <strong>Ro</strong>lon <strong>De</strong>nti y <strong>Co</strong>lombo por si no estaba claro</p>
        <p> Luca Denti, Benito Colombo, Agustin Rolon De Bary</p>
        <img src="images.gif" alt="Cargando..." style={{ height: "90px", width: "90px"}}/>
    </footer>
);
}

export default Footer;