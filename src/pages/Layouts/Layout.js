import React from "react";
import MyNavbar from "../../components/Header/Navbar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Vision from "../../components/Vision/Vision";
import Portfolio from "../../components/Products/Product";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";
// import Gallery from "../../components/Products/Product";


function Layout() {
  return (
    <div>
      <MyNavbar />
       <Home />
       <About />
       <Vision />
       <Portfolio />
    {/* < Gallery /> */}
       <News />
       <Footer />
    </div>
  );
}

export default Layout;

// images={images} 