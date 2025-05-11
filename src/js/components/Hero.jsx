import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-light text-center py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-xxl-8">
          <h1 className="display-4 fw-bold">Bienvenido a mi sitio</h1>
          <p className="lead">Descubre todo lo que tenemos para ti</p>
          <button className="btn btn-primary btn-lg mt-3">Ver más</button>
        </div>
      </div>
    </section>
  );
}

export default Hero