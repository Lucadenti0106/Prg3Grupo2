import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import TopRated from "../../Components/TopRated/TopRated.js";

function Home(){
    return(
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <Navbar/>

            <TopRated />

            

            <Footer />
        </React.Fragment>

        
    )
}

export default Home;