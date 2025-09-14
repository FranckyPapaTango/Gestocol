import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import Footer from '../components/Footer';
import './Home.css'; // On met le CSS spécifique ici

const Home: React.FC = () => {
  return (
    <>
      <TopNavigationBar />

      <section className="home-hero">
        <div className="home-overlay"></div>

        <div className="home-content text-center">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="home-logo"
          />
          <h1 className="home-title">PLATEFORME</h1>
          <h3 className="home-subtitle"></h3>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
