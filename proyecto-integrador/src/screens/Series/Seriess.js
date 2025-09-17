import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import SeriesList from "../../Components/Series/Series.js";

function Series() {



    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <Navbar />
            <SeriesList />
            <Footer />
        </React.Fragment>


    )
}

export default Series;