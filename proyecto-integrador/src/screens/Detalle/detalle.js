import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import UnaPelicula from "../../Components/UnaPelicula/UnaPelicula.js";

function Detalle(props) {

    console.log(props)
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <Navbar name="Walter White" />
            <UnaPelicula/>
            <Footer />
        </React.Fragment>
    );
}

export default Detalle;