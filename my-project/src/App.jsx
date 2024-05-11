import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Profil from "./pages/Profil";
import Cart from "./pages/Cart";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/** Navbar untuk semua page */}
        <Routes> {/* Routes iki gawe penambahan link lek misal ono navigation iso ditambahno ndek Route ngisor iki */}
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="about" element={<About />} />
          <Route path="Profil" element={<Profil />} />
          <Route path="Cart" element={<Cart />} />
        </Routes>
        <Footer />   
        {/* {Footer untuk semua page} */}
      </BrowserRouter>
    </>
  )
}

export default App;