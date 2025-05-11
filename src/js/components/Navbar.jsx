import React from "react";

function Navbar() {
  return (
    <section className="bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <a className="navbar-brand" href="#">StartBootstrap</a>
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
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">About</a>
            <a className="nav-item nav-link" href="#">Service</a>
            <a className="nav-item nav-link disabled" href="#">Contact</a>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar