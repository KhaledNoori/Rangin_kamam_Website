import React from "react";
import MyNavbar from "../../components/Header/Navbar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Vision from "../../components/Vision/Vision";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";
import Myproduct from "../../components/Myproduct/Myproduct";
import ContactUs from "../../components/Contact-us/ContactUs";

function Layout() {
  return (
    <div>
      <MyNavbar />
      <Home />
      <About />
      <Vision />
      <Myproduct />
      <News />

    
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Layout;
