// src/pages/CrudGestion.tsx
import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/TopNavigationBar';
import Footer from '../components/Footer';
import CrudBarMenu from '../components/CrudBarMenu';

const CrudGestion: React.FC = () => {
  const location = useLocation();

  // Si la route contient "/crudgestion/codevalidations" ou autre CRUD, on masque le menu
  const isModuleActive = location.pathname !== '/crudgestion';

  return (
    <>
      <Navbar />
      <div style={{ marginTop: '80px' }} />

      <main className="container my-5">
        {!isModuleActive ? (
          <>
            <CrudBarMenu />
            <div className="mt-4">
              <div className="alert alert-info text-center">
                <h4>Bienvenue dans la gestion CRUD</h4>
                <p>Sélectionnez une opération dans le menu ci-dessus pour gérer les entités.</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-3">
              <a href="/crudgestion" className="btn btn-secondary">
                RETOUR
              </a>
            </div>
            <Outlet />
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default CrudGestion;
