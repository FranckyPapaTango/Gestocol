import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Tracking from './pages/Tracking';
import SuivreColis from './pages/SuivreColis';
import CrudGestion from './pages/CrudGestion';
import CodeValidationList from './pages/CodeValidation/CodeValidationList';
import CodeValidationForm from './pages/CodeValidation/CodeValidationForm';
import ColisList from './pages/Colis/ColisList';
import ColisForm from './pages/Colis/ColisForm';
import TypePhysiqueList from './pages/TypePhysique/TypePhysiqueList';
import TypePhysiqueForm from './pages/TypePhysique/TypePhysiqueForm';


// Ajoute ici les autres pages CRUD comme ColisList, DestinataireList, etc.

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/suivreColis" element={<SuivreColis />} />

        {/* Layout CRUD avec menu commun */}
        <Route path="/crudgestion" element={<CrudGestion />}>
          {/* <Route index element={<CodeValidationList />} />            // par défaut */}
          <Route path="codevalidations" element={<CodeValidationList />} />
          <Route path="codevalidations/new" element={<CodeValidationForm />} />
          <Route path="codevalidations/:id/edit" element={<CodeValidationForm />} />

          {/* Ajoute ici les autres enfants CRUD */}
          <Route path="coliss" element={<ColisList />} />
          <Route path="colis/new" element={<ColisForm />} />
          <Route path="colis/:id/edit" element={<ColisForm />} />

          <Route path="typephysiques" element={<TypePhysiqueList />} />
          <Route path="typephysiques/new" element={<TypePhysiqueForm />} />
          <Route path="typephysiques/:id/edit" element={<TypePhysiqueForm />} />

          {/* <Route path="destinataire-list" element={<DestinataireList />} /> */}
          {/* etc. */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
