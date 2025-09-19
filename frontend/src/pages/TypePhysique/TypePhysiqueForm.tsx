import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE;

interface TypePhysiqueFormData {
  css_raw_color_code: string;
  type_physique: string;
}

const TypePhysiqueForm: React.FC = () => {
  const [formData, setFormData] = useState<TypePhysiqueFormData>({
    css_raw_color_code: '',
    type_physique: '',
  });

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
     // axios.get(`http://localhost:8083/typephysiques/${id}`).then(response => {
          axios.get<CodeValidation>(`${API}/typephysiques/${id}`).then(response => {
        setFormData({
          css_raw_color_code: response.data.css_raw_color_code,
          type_physique: response.data.type_physique || '',
        });
      });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (id) {
       // await axios.put(`http://localhost:8083/typephysiques/${id}`, formData);
         await axios.put(`${API}/typephysiques/${id}`, formData);
      } else {
      //  await axios.post('http://localhost:8083/typephysiques/', formData);
          await axios.post(`${API}/codevalidations/`, formData);
      }
      navigate('/crudgestion/typephysiques');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du type physique', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>{id ? 'Modifier' : 'Créer'} un Type Physique</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="css_raw_color_code">Code Couleur CSS</Label>
          <Input
            type="text"
            name="css_raw_color_code"
            id="css_raw_color_code"
            value={formData.css_raw_color_code}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="type_physique">Libellé</Label>
          <Input
            type="text"
            name="type_physique"
            id="type_physique"
            value={formData.type_physique}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" color="success">
          {id ? 'Mettre à jour' : 'Créer'}
        </Button>{' '}
        <Button type="button" color="secondary" onClick={() => navigate('/crudgestion/typephysiques')}>
          Annuler
        </Button>
      </Form>
    </div>
  );
};

export default TypePhysiqueForm;
