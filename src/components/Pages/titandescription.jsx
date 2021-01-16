import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cardtitandescription from "../Molecules/cardtitandescription";
import "../../styles/style.css";
import Loader from "../Atoms/loader";

const Titandescription = ({ match }) => {
  const [state, setState] = useState({});
  const titanid = match.params.id
  useEffect(() => {
    Axios.get(
      `https://my-json-server.typicode.com/FrapoDeveloper/titans-db/titanes/${titanid}`
    ).then((response) => {
      //resolvemos la promesa
      setState(response.data);
    });
  }, []);

  return (
    <>
      {Object.keys(state).length === 0 ? (
        <Loader />
      ) : (
        <Cardtitandescription titanActual={state} />
      )}
    </>
  );
};
export default Titandescription;