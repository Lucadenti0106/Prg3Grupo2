import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import TopRatedFullComponent from "../../Components/TopRatedFull/TopRatedFull";

function TopRatedScreen() {
  return (
    <React.Fragment>
      <Navbar />
      <TopRatedFullComponent />
      <Footer />
    </React.Fragment>
  );
}

export default TopRatedScreen;