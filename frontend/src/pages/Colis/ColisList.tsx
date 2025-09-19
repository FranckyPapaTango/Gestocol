// frontend/src/pages/Colis/ColisList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Colis } from './types';
import { Link } from 'react-router-dom';

// const API = import.meta.env.VITE_API_BASE || "http://localhost:8083/api";
const API = import.meta.env.VITE_API_BASE;

export default function ColisList() {
  const [items, setItems] = useState<Colis[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await axios.get<Colis[]>(`${API}/colis/`);
      setItems(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id: number) => {
    if (!confirm("Supprimer ce colis ?")) return;
    await axios.delete(`${API}/colis/${id}`);
    load();
  };

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Liste des colis</h2>
        <Link to={`/crudgestion/colis/new`} className="btn btn-success">Nouveau</Link>
      </div>

      {loading ? <p>Chargement...</p> : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type physique</th>
              <th>Delai envoi</th>
              <th>Date envoi</th>
              <th>Date enlèvement</th>
              <th>Collecte</th>
              <th>Statut</th>
              <th>Code validation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id_colis}>
                <td>{i.id_colis}</td>
                <td>{i.typePhysique?.nom || '-'}</td>
                <td>{i.delaiEnvoi?.libelle || '-'}</td>
                <td>{i.dateEnvoi || '-'}</td>
                <td>{i.dateEnlevement || '-'}</td>
                <td>{i.collecte ? 'Oui' : 'Non'}</td>
                <td>{i.statutColis?.libelle || '-'}</td>
                <td>{i.idCodevalidation?.valeur_litterale || '-'}</td>
                <td>
                  <Link className="btn btn-sm btn-secondary me-2" to={`/crudgestion/colis/${i.id_colis}/edit`}>Éditer</Link>
                  <button className="btn btn-sm btn-danger" onClick={() => remove(i.id_colis)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
