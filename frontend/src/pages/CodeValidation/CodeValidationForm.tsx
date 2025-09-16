// frontend/src/pages/CodeValidation/CodeValidationForm.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CodeValidation } from './types';
import { useNavigate, useParams } from 'react-router-dom';

// const API = import.meta.env.VITE_API_BASE || "http://localhost:8083/api";
const API = import.meta.env.VITE_API_BASE;


export default function CodeValidationForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const isEdit = !!id;

  const [valeur, setValeur] = useState('');

  useEffect(() => {
    if (isEdit && id) {
      axios.get<CodeValidation>(`${API}/codevalidations/${id}`)
        .then(res => setValeur(res.data.valeur_litterale || ''))
        .catch(() => alert("Impossible de charger l'élément"));
    }
  }, [id, isEdit]);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEdit && id) {
        await axios.put(`${API}/codevalidations/${id}`, { valeur_litterale: valeur });
      } else {
        await axios.post(`${API}/codevalidations/`, { valeur_litterale: valeur });
      }

      navigate('/crudgestion/codevalidations');

    } catch (err) {
      alert("Erreur lors de l'enregistrement");
    }
  };

  return (
    <div className="container my-4">
      <h2>{isEdit ? 'Éditer' : 'Nouveau'} Code de validation</h2>
      <form onSubmit={save}>
        <div className="mb-3">
          <label className="form-label">Valeur littérale</label>
          <input className="form-control" value={valeur} onChange={e => setValeur(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
