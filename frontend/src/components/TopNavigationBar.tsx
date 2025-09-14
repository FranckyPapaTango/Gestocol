import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JS de Bootstrap pour dropdown et collapse
import './TopNavigationBar.css';

// Simulation état auth
const isAuthenticated = true;
const username = 'François';

const TopNavigationBar: React.FC = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-logo d-flex align-items-center">
          <img src="/assets/images/logo.png" alt="RAFAROS-IT" height={60} />
          <span className="ms-2">Accueil</span>
        </Link>

        <span className="navbar-brand mx-3">GESTOCOL</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/ajouterColis">ENVOI DE COLIS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/suivreColis">SUIVRE UN COLIS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/crudgestion">GESTION CRUD</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/tracking">TRACKING</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/aboutUs">A PROPOS</Link></li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="authDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {isAuthenticated ? username : 'Non authentifié'}
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="authDropdown">
                {isAuthenticated ? (
                  <li><Link className="dropdown-item" to="/logout">Déconnexion</Link></li>
                ) : (
                  <li><Link className="dropdown-item" to="/login">Connexion</Link></li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
