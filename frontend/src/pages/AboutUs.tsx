// src/pages/AboutUs.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/TopNavigationBar';  // équivalent de ton topNavigationBarInclude.jsp
import Footer from '../components/Footer';  // équivalent de ton footer.jsp
//import logo from '../assets/images/logo.png';
import logo from '/assets/images/logo.png';

const AboutUs: React.FC = () => {
  return (
    <>
      {/* Barre de navigation */}
      <Navbar />

      {/* Espacement pour compenser le navbar fixe */}
      <div style={{ marginTop: '80px' }} />

      <main>
        <div className="container my-5">
          <div className="row">
            {/* Texte */}
            <div className="col-md-6">
              <div className="card mb-3 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>À propos de nous</strong>
                  </h5>
                  <p className="card-text">
                    Bienvenue sur notre site Web! Nous sommes une entreprise dédiée à fournir des solutions de haute
                    qualité dans le domaine du Transport-Livraison de Personnes et de Marchandises. Notre objectif est
                    de satisfaire les besoins de nos clients et de leur offrir une expérience exceptionnelle.
                  </p>
                  <p className="card-text">
                    Nous sommes fiers de notre équipe de professionnels talentueux et de notre engagement envers
                    l&apos;excellence. Notre mission est de créer de la valeur pour nos clients et de contribuer au
                    succès de leurs projets.
                  </p>
                  <p className="card-text">
                    N&apos;hésitez pas à nous contacter si vous avez des questions ou des commentaires. Nous serions
                    ravis de recueillir vos avis et d&apos;avoir de vos nouvelles!
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="col-md-6">
              <div className="card mb-3 shadow-sm">
                <img src={logo} className="card-img-top" alt="À propos" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
