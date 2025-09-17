import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import UnaSerie from "../../Components/UnaSerie/UnaSerie.js";

function DetalleSerie(props) {

    console.log(props)
    return (
        <React.Fragment>
            <h1>Udesa Movies</h1>
            <Navbar name="Walter White" />
            <UnaSerie {...props}/>
            <Footer />
        </React.Fragment>
    );
}

export default DetalleSerie;