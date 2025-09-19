import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_BASE;

interface TypePhysique {
  id_type_physique: number;
  css_raw_color_code: string;
  date_persistence?: string;
  updated_version_date?: string;
  type_physique?: string;
}

const TypePhysiqueList: React.FC = () => {
  const [typePhysiques, setTypePhysiques] = useState<TypePhysique[]>([]);
  const navigate = useNavigate();

  const fetchTypePhysiques = async () => {
    try {
      //const response = await axios.get<TypePhysique[]>('http://localhost:8083/typephysiques/');
      const response = await axios.get<TypePhysique[]>(`${API}/typephysiques/`);
      setTypePhysiques(response.data);
    } catch (error) {
      console.error('Erreur lors du fetch des types physiques', error);
    }
  };

  const deleteTypePhysique = async (id: number) => {
    try {
     // await axios.delete(`http://localhost:8083/typephysiques/${id}`);
      await axios.delete(`${API}/typephysiques/${id}`);
      fetchTypePhysiques();
    } catch (error) {
      console.error('Erreur lors de la suppression du type physique', error);
    }
  };

  useEffect(() => {
    fetchTypePhysiques();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Liste des Types Physiques</h2>
      <Button color="primary" className="mb-3" onClick={() => navigate('/typephysiques/new')}>
        Ajouter un Type Physique
      </Button>
      <Table bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Couleur CSS</th>
            <th>Date Persistance</th>
            <th>Date Mise à jour</th>
            <th>Libellé</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {typePhysiques.map(tp => (
            <tr key={tp.id_type_physique}>
              <td>{tp.id_type_physique}</td>
              <td>
                <span style={{ backgroundColor: tp.css_raw_color_code, padding: '5px 10px', borderRadius: '4px', color: '#fff' }}>
                  {tp.css_raw_color_code}
                </span>
              </td>
              <td>{tp.date_persistence || '-'}</td>
              <td>{tp.updated_version_date || '-'}</td>
              <td>{tp.type_physique || '-'}</td>
              <td>
                <Button color="warning" size="sm" onClick={() => navigate(`/typephysiques/edit/${tp.id_type_physique}`)}>
                  Modifier
                </Button>{' '}
                <Button color="danger" size="sm" onClick={() => deleteTypePhysique(tp.id_type_physique)}>
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TypePhysiqueList;
