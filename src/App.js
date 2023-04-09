import forge from "node-forge";
import { useEffect } from "react";
// import { mode } from "crypto-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
import Header from "./component_client/Header/header";
import Button from "./button/btn";
// import Dashboard from "./page/server/dashboard";
// import Sign from "./page/server/Sign/Sign";
import Home from "./page/client/Home/Home";
import Detail_page from "./page/client/Detail/Detail_page";
import Post_page from "./page/client/Post/Post_page";
import Post_page_detail from "./page/client/PostDetail/Post_detail";
import Contact_page from "./page/client/Contact/Contact_page";
import Sign_client from "./page/client/Sign/Sign";
import Pay_page from "./page/client/pay/Pay_page";
import Error_not_found from "./page/client/Error/Error404";
import ForgotPassNext from "./component_client/Sign/ForgotPassNext";
import OderHistory_page from "./page/client/Order_history/OrderHistory";
import {  Route, Routes } from "react-router-dom";
import Intro from "./component_client/Intro";
import Account_page from "./page/client/Account/user_page";
import List_page from "./page/client/listProduce/listProduce";
import { Switch } from 'react-router-dom'
import ForgotPass from "./component_client/Sign/ForgotPass";
// import Detail from "./component_client/Detail/Detail";
// import { Routes} from "react-router";
// import { Routes, Route } from "react-router";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AsNavFor from "./component_client/check/check_slick";

function App() {
  return (
    <div className="App">
      {/* <AsNavFor/> */}
      {/* <Pay_page/> */}
      {/* <Contact_page/> */}
        {/* <Home/> */}
        {/* <Sign_client/> */}
       <Routes>
       
        <Route path="/" element={<Home />} /> 
        <Route path="/list" element={<List_page/>} />
        <Route path="/list/:id" element={<Detail_page/>} />
        {/* <Route path="/detail" element={<Detail_page/>} /> */}
        <Route path="/listPost" element={<Post_page/>} />
        <Route path="/post" element={<Post_page_detail/>} />
        <Route path="/pay" element={<Pay_page/>} />
        <Route path="/contact" element={<Contact_page/>} />
        <Route path="/sign" element={<Sign_client/>} />
        <Route path="/order" element={<OderHistory_page/>} />
        <Route path="/forgot" element={<ForgotPass/>} />
        <Route path="/forgotNext" element={<ForgotPassNext/>} />
        <Route path="/intro" element={<Intro/>} />
        <Route path="/accountUser" element={<Account_page/>} />
        <Route path="*" element={<Error_not_found/>} />
       </Routes>
  
    </div>
  );
}

export default App;
