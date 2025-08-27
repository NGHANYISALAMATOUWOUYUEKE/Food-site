import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Placeorder from "./pages/Placeorder";
import Footer from "./components/Footer";
import LoginPopUp from "./components/LoginPopUp";

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className="w-[80%] m-auto">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Card />}></Route>
          <Route path="/order" element={<Placeorder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
