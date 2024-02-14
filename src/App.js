import React from "react";
// import { Route, BrowserRouter as router,Router,Routes } from "react-router-dom";

import Layout from "./pages/Layouts/Layout";


const App = () => {
 
  return(
   <div>
    {/* <Router>
      <Routes>
        <Route path="/"Component={Layout} exact />
      </Routes>
    </Router> */}

    <Layout />
   </div>
  )
    
}

export default App;
