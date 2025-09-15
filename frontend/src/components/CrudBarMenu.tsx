// src/components/CrudBarMenu.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CrudBarMenu: React.FC = () => {
  // Liste des items du menu
  const items = [
    { path: '/codevalidation-list', label: 'Codes de Validation' },
    { path: '/colis-list', label: 'Colis' },
    { path: '/destinataire-list', label: 'Destinataires' },
    { path: '/expediteur-list', label: 'Expéditeurs' },
    { path: '/facture-list', label: 'Factures' },
    { path: '/livreur-list', label: 'Livreurs' },
    { path: '/pointscanoblig-list', label: 'Points de Scan Obligatoires' },
    { path: '/tracker-list', label: 'Trackers' },
    { path: '/vehicule-list', label: 'Véhicules' },
    { path: '/delaienvoi-list', label: 'Délais d\'Envoi' },
    { path: '/statutcolis-list', label: 'Statuts de Colis' },
    { path: '/typephysique-list', label: 'Types Physiques de Colis' },
    { path: '/pieceidentite-list', label: 'Types de Pièce d\'Identité' },
    { path: '/role-list', label: 'Types de Rôles' },
  ];

  return (
    <div className="container">
      <div className="text-center my-4">
        <h2>Gestion CRUD</h2>
      </div>

      <div className="row">
        {items.map((item, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
            <div className="card h-100">
              <div className="card-body d-flex align-items-center justify-content-center">
                <a href={item.path} className="btn btn-primary btn-block w-100">
                  {item.label}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudBarMenu;
