import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import UnaPelicula from "../../Components/UnaPelicula/UnaPelicula.js";

function Detallepelicula(props) {

    console.log(props)
    return (
        <React.Fragment>
            <Navbar />
            <UnaPelicula {...props}/>
            <Footer />
        </React.Fragment>
    );
}

export default Detallepelicula;