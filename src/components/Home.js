import React from "react";
import { Link } from "react-router-dom";

function NavElement() {
  return (
    <body>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-md-8">
          <a className="navbar-brand text-white text-center font-weight-bold p-2">
            Joel Rudin
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/home">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/portfolio">
              Portfolio
            </Link>
            <Link className="nav-item nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </body>
  );
}

export default NavElement;
