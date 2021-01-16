import React from "react";
import { Link } from "react-router-dom";

const Cardpersonaje = ({ id, nombre, img, years, definition, gender }) => (
  <>
    <article className="s-shadow-bottom">
      <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <Link to={`personajes/${id}`}>
          <img src={img} alt={nombre} />
        </Link>
      </div>
      <div className="s-bg-white s-pxy-2">
        <h3>{nombre}</h3>

        <p className="s-mb-0 s-cross-right">{definition}</p>
      </div>
      <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
        <p className="s-mb-0">{`Años: ${years}`}</p>

        <div className=" s-to-right">{`Sexo: ${gender}`}</div>
      </footer>
    </article>
  </>
);

export default Cardpersonaje;
