import React from "react";
import MyNavbar from "../../components/Header/Navbar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Vision from "../../components/Vision/Vision";
function Layout() {
  return (
    <div>
      <MyNavbar />
       <Home />
       <About />
       <Vision />
    </div>
  );
}

export default Layout;