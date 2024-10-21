import React from "react";
import './App.css';
import Navbar from './inc/navbar'; 
import Footer from './inc/footer';
import Menu1 from './pages/Menu-combo';
import Menu2 from './pages/Menu-gagion';
import Menu3 from './pages/Menu-gasotcay';
import Menu4 from './pages/Menu-myY';
import Menu5 from './pages/Menu-burgercom';
import Menu6 from './pages/Menu-Phananphu';
import Menu7 from './pages/Menu-trangmieng';
import Menu8 from './pages/Menu-thucuong';
import Home from './pages/Home';
import Locations from "./pages/Location";
import Promotion from "./pages/Promotion";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu-combo" element={<Menu1 />} />
          <Route path="/menu-gagion"element={<Menu2 />} />
          <Route path="/menu-gasotcay"element={<Menu3 />} />
          <Route path="/menu-myY"element={<Menu4 />} />
          <Route path="/menu-burgercom"element={<Menu5 />} />
          <Route path="/menu-phananphu"element={<Menu6 />} />
          <Route path="/menu-trangmieng"element={<Menu7 />} />
          <Route path="/menu-thucuong"element={<Menu8 />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/Promotion" element={<Promotion />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
