import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Colis } from './types';
import { useNavigate, useParams } from 'react-router-dom';

// const API = import.meta.env.VITE_API_BASE || "http://localhost:8083/api";
const API = import.meta.env.VITE_API_BASE;

export default function ColisForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const isEdit = !!id;

  const [colis, setColis] = useState<Partial<Colis>>({
    typePhysique: { nom: '' },
    delaiEnvoi: { libelle: '' },
    dateEnvoi: '',
    dateEnlevement: '',
    collecte: false,
    statutColis: { libelle: '' },
    idCodevalidation: { valeur_litterale: '' },
  });

  // Charger un colis si édition
  useEffect(() => {
    if (isEdit && id) {
      axios
        .get<Colis>(`${API}/colis/${id}`)
        .then(res => setColis(res.data))
        .catch(() => alert("Impossible de charger le colis"));
    }
  }, [id, isEdit]);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEdit && id) {
        await axios.put(`${API}/colis/${id}`, colis);
      } else {
        await axios.post(`${API}/colis/`, colis);
      }
      navigate('/crudgestion/colis');
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'enregistrement du colis");
    }
  };

  return (
    <div className="container my-4">
      <h2>{isEdit ? 'Éditer' : 'Nouveau'} Colis</h2>
      <form onSubmit={save}>
        <div className="mb-3">
          <label className="form-label">Type physique</label>
          <input
            className="form-control"
            value={colis.typePhysique?.nom || ''}
            onChange={e =>
              setColis({ ...colis, typePhysique: { nom: e.target.value } })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Délai envoi</label>
          <input
            className="form-control"
            value={colis.delaiEnvoi?.libelle || ''}
            onChange={e =>
              setColis({ ...colis, delaiEnvoi: { libelle: e.target.value } })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date envoi</label>
          <input
            type="date"
            className="form-control"
            value={colis.dateEnvoi || ''}
            onChange={e => setColis({ ...colis, dateEnvoi: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date enlèvement</label>
          <input
            type="date"
            className="form-control"
            value={colis.dateEnlevement || ''}
            onChange={e => setColis({ ...colis, dateEnlevement: e.target.value })}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="collecte"
            checked={colis.collecte || false}
            onChange={e => setColis({ ...colis, collecte: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="collecte">
            Collecte
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">Statut colis</label>
          <input
            className="form-control"
            value={colis.statutColis?.libelle || ''}
            onChange={e =>
              setColis({ ...colis, statutColis: { libelle: e.target.value } })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Code validation (valeur littérale)</label>
          <input
            className="form-control"
            value={colis.idCodevalidation?.valeur_litterale || ''}
            onChange={e =>
              setColis({
                ...colis,
                idCodevalidation: { valeur_litterale: e.target.value },
              })
            }
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
