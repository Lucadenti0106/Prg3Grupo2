import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import Results from "../../Components/Search-results/Search-resultados.js";
import SearchBar from "../../Components/Searchbar/Searchbar.js";


function Resultados() {
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <Navbar />
            <SearchBar />
            <Results />
            <Footer />
        </React.Fragment>
    )
}

export default Resultados;