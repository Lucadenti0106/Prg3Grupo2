import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import TopRated from "../../Components/TopRated/TopRated.js";
import Searchbar from "../../Components/Searchbar/Searchbar.js";
import EnCartelera from "../../Components/EnCartelera/EnCartelera.js";

function Home() {
    return (
        <React.Fragment>
            <Searchbar />
            <Navbar />
            <TopRated />
            <EnCartelera />
            <Footer />
        </React.Fragment>
    )
}

export default Home;