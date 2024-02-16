import React from "react";
import MyNavbar from "../../components/Header/Navbar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Vision from "../../components/Vision/Vision";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";
function Layout() {
  return (
    <div>
      <MyNavbar />
       <Home />
       <About />
       <Vision />
       <News />
       <Footer />
    </div>
  );
}

export default Layout;