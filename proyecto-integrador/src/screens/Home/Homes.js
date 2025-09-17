import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import TopRated from "../../Components/TopRated/TopRated.js";
import EnCartelera from "../../Components/EnCartelera/EnCartelera.js";

function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <TopRated />
            <EnCartelera />
            <Footer />
        </React.Fragment>
    )
}

export default Home;