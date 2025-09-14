import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-3">
      &copy; {new Date().getFullYear()} Gestocol. Tous droits réservés.
    </footer>
  );
};

export default Footer;
