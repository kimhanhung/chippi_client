import forge from "node-forge";
import { useEffect } from "react";
// import { mode } from "crypto-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./component_client/Header/header";
import Button from "./button/btn";
// import Dashboard from "./page/server/dashboard";
// import Sign from "./page/server/Sign/Sign";
import Home from "./page/client/Home/Home";
import Post_page from "./page/client/Post/Post_page";
import Contact_page from "./page/client/Contact/Contact_page";
import Sign_client from "./page/client/Sign/Sign";
import Pay_page from "./page/client/pay/Pay_page";
// import { Route } from "react-router-dom";
// import { Routes} from "react-router";
// import { Routes, Route } from "react-router";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Pay_page/> */}
      {/* <Contact_page/> */}
        <Home/>
        {/* <Sign_client/> */}
       {/* <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/sign" element={<Sign />} />
       </Routes> */}
  
    </div>
  );
}

export default App;
