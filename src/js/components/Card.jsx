import React from "react";
import FotoLanding from "../../img/Foto-Landing.jpg";
import Rigo from "../../img/rigo-baby.jpg";



function Card({ image, title, description, buttonText, url }) {
  return (
    <div className="card text-center" style={{ width: '18rem', margin: '1rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
}


function CardsGroup() {
  const cardsData = [
    {
      image: FotoLanding,
      title: "Primera Card",
      description: "Descripción de la primera.",
      buttonText: "Ver más",
      url: "#1"
    },
    {
      image: Rigo,
      title: "Segunda Card",
      description: "Descripcion de la segunda.",
      buttonText: "Ver más",
      url: "#2"
    },
    {
      image: FotoLanding,
      title: "Tercera Card",
      description: "Descripcion de la tercera.",
      buttonText: "Ver mas",
      url: "#3"
    },
    {
      image: Rigo,
      title: "Cuarta Card",
      description: "Descripcion de la cuarta.",
      buttonText: "Ir Ver mas",
      url: "#4"
    }
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cardsData.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          buttonText={item.buttonText}
          url={item.url}
        />
      ))}
    </div>
  );
}

export default CardsGroup;
