// src/pages/Tracking.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/TopNavigationBar';  // équivalent de ton topNavigationBarInclude.jsp
import Footer from '../components/Footer';

const Tracking: React.FC = () => {
  return (
    <>
      {/* Barre de navigation */}
      <Navbar />

      {/* Espacement pour compenser la navbar fixe */}
      <div style={{ marginTop: '80px' }} />

      <div className="container my-5">
        <div className="alert alert-warning text-center shadow-sm">
          <h1>Tracking (Suivi et Géolocalisation par GPS)</h1>
          <p>
            Tracker un Colis, Tracker le Véhicule transportant le Colis et son Chauffeur-Livreur
          </p>
          <h2>Fonctionnalité en Maintenance - veuillez nous excuser</h2>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Tracking;
