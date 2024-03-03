import React from "react";
import MyNavbar from "../../components/Header/Navbar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Vision from "../../components/Vision/Vision";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";
import ContactUs from "../../components/Contact-us/ContactUs";
import Allproduct from "../../components/Myproduct/Allproduct";

function Layout() {
  return (
    <div>
      <MyNavbar />
      <Home />
      <About />
      <Vision />
      <Allproduct />
      <News />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Layout;
