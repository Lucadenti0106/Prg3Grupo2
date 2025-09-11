import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";

function Peliculas() {



    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <Navbar />
            <TopRated />
            <Footer />
        </React.Fragment>


    )
}

export default Peliculas;