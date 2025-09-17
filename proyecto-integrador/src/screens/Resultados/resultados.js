import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import Results from "../../Components/Search-results/Search-resultados.js";
import SearchBar from "../../Components/SearchBar/Searchbar.js";


function Resultados() {
    return (
        <React.Fragment>
            <Navbar />
            <Results />
            <Footer />
        </React.Fragment>
    )
}

export default Resultados;