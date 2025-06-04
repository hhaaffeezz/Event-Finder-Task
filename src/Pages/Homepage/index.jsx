import React from "react";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/footer";
import FeatureEvent from '../../layouts/FeatureEvent';
import HeroSection from "../../layouts/Herosection";
function Homepage() {

  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <FeatureEvent/>
<Footer/>
    </div>
  );
}

export default Homepage;