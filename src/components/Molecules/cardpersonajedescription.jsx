import React from "react";

import '../../styles/style.css'
const Cardpersonajedes = ({ personajeActual }) => (
  <article className="">
    <div className="ed-grid  m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">
      <div className="m-cols-2 img-container s-ratio-16-9 s-radius-tl s-radius-tr m-radius">
        <img src={personajeActual.gif} alt={personajeActual.nombre} />
      </div>
      <div className="s-pxy-6 m-pxy-6 m-cols-3">
        <h1 className="s-px-2  s-py-1">{personajeActual.nombre}</h1>

        <h4 className="s-px-2 s-to-left">{personajeActual.gender}</h4>
        <div className="s-px-2">
                  <h3 >{personajeActual.description}</h3>

        </div>
      </div>
    </div>
    <footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
      <div className="s-to-center">{`Nacio el ${personajeActual.birthdate}
         y tiene ${personajeActual.years.slice(0,3)} años.`}</div>
    </footer>




  </article>
);

export default Cardpersonajedes;
