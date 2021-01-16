import React from "react";
import { Link } from "react-router-dom";
import "../../styles/titan.css";
import "../../styles/style.css";
const Cardtitan = ({ id, poder, img, name, altura, definition }) => (
  <div className="ed-grid card-titan  s-bg-grey  m-bg-grey  lg-bg-grey xs-bg-grey lg-grid-3 lg-90 lg-to-center s-pxy-1 s-border s-radius s-shadow-bottom">
    <div className="s-ratio-4-3 l-ratio-9-16  img-container img-titan">
         <Link to={`titanes/${id}`}>
        <img src={img} alt={name} link={name}/>
        </Link>
    </div>

    <div className="lg-cols-2 content">
      <h2>{name}</h2>
      <nav className="info-titan">
        <p className="left">{definition}</p>

        <span className="power">
          <p>Poder: </p>
            {poder.map((t) => (
                  <span className="star" role="img" aria-label="donut">🔥</span>
                )
            )
            }
        </span>
        <p className="left"> {`Altura: ${altura}`}</p>

      </nav>
    </div>
  </div>
);

export default Cardtitan;
