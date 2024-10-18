import React from 'react';
import './Footer.css'; // Puedes agregar estilos personalizados aquí

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Kodigo Music. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
