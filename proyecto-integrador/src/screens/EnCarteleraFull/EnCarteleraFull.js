import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import EnCarteleraFullComponent from "../../Components/EnCarteleraFull/EnCarteleraFull";

function EnCarteleraScreen() {
  return (
    <React.Fragment>
      <Navbar />
      <EnCarteleraFullComponent />
      <Footer />
    </React.Fragment>
  );
}

export default EnCarteleraScreen;