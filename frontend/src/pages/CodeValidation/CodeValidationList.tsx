// frontend/src/pages/CodeValidation/CodeValidationList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CodeValidation } from './types';
import { Link } from 'react-router-dom';

// const API = import.meta.env.VITE_API_BASE || "http://localhost:8083/api";
const API = import.meta.env.VITE_API_BASE;


export default function CodeValidationList() {
  const [items, setItems] = useState<CodeValidation[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await axios.get<CodeValidation[]>(`${API}/codevalidations/`);
      setItems(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id: number) => {
    if (!confirm("Supprimer cet élément ?")) return;
    await axios.delete(`${API}/codevalidations/${id}`);
    load();
  };

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Codes de validation</h2>
        <Link to={`/crudgestion/codevalidations/new`} className="btn btn-success">Nouveau</Link>
      </div>

      {loading ? <p>Chargement...</p> : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Valeur</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id_codevalidation}>
                <td>{i.id_codevalidation}</td>
                <td>{i.valeur_litterale}</td>
                <td>
                  <Link className="btn btn-sm btn-secondary me-2" to={`/crudgestion/codevalidations/${i.id_codevalidation}/edit`}>Éditer</Link>
                  <button className="btn btn-sm btn-danger" onClick={() => remove(i.id_codevalidation)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
