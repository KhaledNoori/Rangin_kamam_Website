import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./container/Product";
import Layout from "./pages/Layouts/Layout";
import Homepr from "./container/Homepr";
import Homepr1 from "./container/Homepr1";
import Homepr2 from "./container/Homepr2";
import Product2 from './container/Product2'
import Product1 from './container/Product1';


const App = () => {

  return (

    <div>

      <Router>
        <Routes>
        
          <Route path="/" Component={Layout} exact />
          <Route path="/product/:id" Component={Product} />
          <Route path="/product/:id" Component={Product1} />
          <Route path="/product/:id" Component={Product2} />
          
           <Route path="/Product1/Rang-Roghani" Component={Homepr1} />
          <Route path="/product/Rang-Plastic" Component={Homepr2} /> 
          <Route path="/product/Rang-Varzin" Component={Homepr} />
        </Routes>
      </Router>
    
    </div>

    // <Layout />    


  )

}

export default App;
