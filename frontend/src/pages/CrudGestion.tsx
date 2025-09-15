// src/pages/CrudGestion.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/TopNavigationBar';  // équivalent de ton topNavigationBarInclude.jsp
import Footer from '../components/Footer';
import CrudBarMenu from '../components/CrudBarMenu';


const CrudGestion: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Espacement à cause de la navbar fixe */}
      <div style={{ marginTop: '80px' }} />

      <main className="container my-5">
        {/* Menu CRUD */}
        <CrudBarMenu />

        {/* Zone principale */}
        <div className="mt-4">
          <div className="alert alert-info text-center">
            <h4>Bienvenue dans la gestion CRUD</h4>
            <p>Sélectionnez une opération dans le menu ci-dessus.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CrudGestion;
