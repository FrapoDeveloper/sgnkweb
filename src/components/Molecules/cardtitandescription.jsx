import React from "react";
import '../../styles/style.css'
const Cardtitandescription = ({ titanActual }) => (
  <article className="">
    <div className="ed-grid  m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">
      <div className="m-cols-2 img-container s-ratio-16-9 s-radius-tl s-radius-tr m-radius">
        <img src={titanActual.img} alt={titanActual.name} />
      </div>
      <div className="s-pxy-2 m-pxy-0 m-cols-3">
        <h1  className="s-px-2">{titanActual.name}</h1>
        <h3 className="s-px-2">{titanActual.description}</h3>
      </div>
    </div>
    <footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
    <h4  className="s-px-2 s-to-center">{`Altura ${titanActual.altura}`}</h4>
    </footer>
 

  </article>
);

export default Cardtitandescription;
