import {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as bootstrap from "bootstrap"; // gives access to Collapse, Modal, etc.
import "bootstrap/dist/css/bootstrap.min.css"; // CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JS (if needed globally)
import '../App.css'; 

const NavBar = () => { 

    useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const menuToggle = document.getElementById("navbarNav");

    if (!menuToggle) return;

    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        bsCollapse.hide(); // close navbar on link click
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {
          bsCollapse.hide();
        });
      });
    };
  }, []);

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light text-center py-4 bgclr px-3 ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand  text-dark fw-bold fs-3">
          AuraPlaylist
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-align-center" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center p-4  custom-mobile-list mt-3">
            <li className="nav-item ">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''} fw-bold fs-5 text-dark`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                to="/recommendations"
                className={`nav-link ${location.pathname === '/recommendations' ? 'active' : ''} fw-bold fs-5  text-dark`}
              >
                Recommendations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''} fw-bold fs-5  text-dark`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
