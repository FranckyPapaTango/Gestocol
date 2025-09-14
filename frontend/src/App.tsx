import ProductsPage from "./pages/ProductsPage";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Tracking from './pages/Tracking';
import SuivreColis from './pages/SuivreColis';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/suivreColis" element={<SuivreColis />} />
        {/* Ajoute d’autres pages ici */}
      </Routes>
    </Router>
  );
};

export default App;
