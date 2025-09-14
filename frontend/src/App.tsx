import ProductsPage from "./pages/ProductsPage";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* Ajoute d’autres pages ici */}
      </Routes>
    </Router>
  );
};

export default App;
