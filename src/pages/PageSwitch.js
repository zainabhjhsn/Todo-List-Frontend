import React, { useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import CompletedTodos from "./CompletedTodos";
import Users from "./Users";
import Header from "../components/Navbar/Header";

function PageSwitch() {

//   const location = useLocation();
//   // Scroll to top if path changes
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

return (
    <>
        <Header />
 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/completed" element={<CompletedTodos />} />
                <Route path="/users" element={<Users />} />
            </Routes>
      
    </>
);
}

export default PageSwitch;
