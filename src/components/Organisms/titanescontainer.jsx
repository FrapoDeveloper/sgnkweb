import React from "react";
import Cardtitan from "../Molecules/cardtitan";
import withloader from "../Hoc/withloader";
const Titanescontainer = ({ titanes }) => (
  <>
    <h1 className="title-titan">Los 9 titanes cambiantes (metamorfos) </h1>
    <div className="ed-grid grid-container s-mt-2 m-grid-2 s-grid-1 xl-grid-2 lg-grid-2 center">
      {titanes.map((t) => (
        <Cardtitan
          id={t.id}
          img={t.img}
          name={t.name}
          altura={t.altura}
          definition={t.definition}
          poder = {t.poder}
        />
      ))}
    </div>
  </>
);
export default withloader("titanes")(Titanescontainer);
