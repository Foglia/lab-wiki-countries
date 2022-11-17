import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link class="navbar-brand" to="/">WikiCountries</Link>
              <Link class="navbar-brand" to="/CountriesList">Countries List</Link>
            </div>
        </nav>
  );
}

export default Navbar;