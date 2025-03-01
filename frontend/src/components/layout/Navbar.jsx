/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>Velora</h1>
        </Link>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-menu ${isOpen ? 'show' : ''}`}>
          <li className={isActive('/')}>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className={isActive('/menu')}>
            <Link to="/menu" onClick={closeMenu}>Menu</Link>
          </li>
          <li className={isActive('/reservation')}>
            <Link to="/reservation" onClick={closeMenu}>Reservation</Link>
          </li>
          <li className={isActive('/about')}>
            <Link to="/about" onClick={closeMenu}>About Us</Link>
          </li>
          <li className={isActive('/contact')}>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
           <li className={isActive('/login')}>
            <Link to="/login" onClick={closeMenu}>Login</Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .navbar {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }

        .navbar-logo {
          color: var(--secondary-color);
        }

        .navbar-logo h1 {
          margin: 0;
          font-size: 1.8rem;
        }

        .navbar-toggle {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .navbar-menu {
          display: flex;
          list-style: none;
        }

        .navbar-menu li {
          margin-left: 2rem;
        }

        .navbar-menu li a {
          color: var(--secondary-color);
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
        }

        .navbar-menu li.active a,
        .navbar-menu li a:hover {
          color: var(--primary-color);
        }

        .navbar-menu li.active a::after,
        .navbar-menu li a:hover::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .navbar-toggle {
            display: block;
          }

          .navbar-menu {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            height: 0;
            flex-direction: column;
            background-color: white;
            overflow: hidden;
            transition: height 0.3s ease;
          }

          .navbar-menu.show {
            height: calc(100vh - 70px);
            padding: 2rem 0;
          }

          .navbar-menu li {
            margin: 1.5rem 0;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;