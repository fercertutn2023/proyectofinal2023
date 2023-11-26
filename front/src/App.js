import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./compoonents/layout/Header";
import Nav from "./compoonents/layout/Nav";
import Footer from "./compoonents/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
import ProductosyserviciosPage from "./pages/ProductosyserviciosPage";


import './App.css';

function App() {
return (
<div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes >
        < Route path="/" element={<HomePage />} />
        < Route path="/nosotros" element={<NosotrosPage />} />        
        < Route path="/productosyservicios" element={<ProductosyserviciosPage />} />
        < Route path="/novedades" element={<NovedadesPage />} />
        < Route path="/contacto" element={<ContactoPage />} />
        </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
    
  );
}

export default App;
