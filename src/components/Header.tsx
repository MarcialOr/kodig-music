import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Puedes agregar estilos personalizados aquí

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Kodigo Music</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/player">Music Player</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
