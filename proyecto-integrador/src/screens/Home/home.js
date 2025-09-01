import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";

function Home(){
    return(
        <React.Fragment>
            <Navbar name="Walter White"/>
            <h1>My App in React</h1>

            

            <Footer />
        </React.Fragment>

        
    )
}

export default Home;