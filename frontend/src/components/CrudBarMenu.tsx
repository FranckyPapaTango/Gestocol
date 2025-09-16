// src/components/CrudBarMenu.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

interface CrudBarMenuProps {
  onSelect?: (module: string) => void; // prop optionnelle
}

const CrudBarMenu: React.FC<CrudBarMenuProps> = ({ onSelect }) => {
  const items = [
    { path: 'codevalidations', label: 'Codes de Validation' },
    { path: 'coliss', label: 'Colis' },
    { path: 'destinataires', label: 'Destinataires' },
    { path: 'expediteurs', label: 'Expéditeurs' },
    { path: 'factures', label: 'Factures' },
    { path: 'livreurs', label: 'Livreurs' },
    { path: 'pointscanobligs', label: 'Points de Scan Obligatoires' },
    { path: 'trackers', label: 'Trackers' },
    { path: 'vehicules', label: 'Véhicules' },
    { path: 'delaienvois', label: "Délais d'Envoi" },
    { path: 'statutcoliss', label: 'Statuts de Colis' },
    { path: 'typephysiques', label: 'Types Physiques de Colis' },
    { path: 'pieceidentites', label: "Types de Pièce d'Identité" },
    { path: 'role-list', label: 'Types de Rôles' },
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
                {/* Si onSelect est défini, on l'appelle sinon on utilise Link */}
                {onSelect ? (
                  <button
                    className="btn btn-primary btn-block w-100"
                    onClick={() => onSelect(item.path)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={`/crudgestion/${item.path}`}
                    className="btn btn-primary btn-block w-100"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudBarMenu;
