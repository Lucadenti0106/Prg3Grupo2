import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import PeliculasList from "../../Components/Pelicula/Pelicula.js";

function Peliculas() {



    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <Navbar />
            <PeliculasList />
            <Footer />
        </React.Fragment>


    )
}

export default Peliculas;