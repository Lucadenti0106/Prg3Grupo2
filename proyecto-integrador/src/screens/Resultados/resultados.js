import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import Searchbar from "../../Components/SearchBar/Searchbar.js";
import Results from "../../Components/Search-results/Search-resultados.js";


function Resultados() {
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <Navbar />
            <Searchbar />
            <Results />
            <Footer />
        </React.Fragment>
    )
}

export default Resultados;