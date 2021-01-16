import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cardpersonajedescription from "../Molecules/cardpersonajedescription";
import "../../styles/style.css";
import Loader from "../Atoms/loader";

const Description_paradise = ({ match,url}) => {

  const [state, setState] = useState({});
  const personajeid = match.params.id
  if(personajeid >10){ url = 'https://my-json-server.typicode.com/FrapoDeveloper/personajes_marley/personajes_marley'}
  else {url = 'https://my-json-server.typicode.com/FrapoDeveloper/personajes_paradise/personajes_paradise'}
    useEffect(() => {
    Axios.get(
      `${url}/${personajeid}`
    ).then((response) => {
      setState(response.data);
    });
  }, []);
  return (
    <>
      {Object.keys(state).length === 0 ? (
        <Loader />
      ) : (
        <Cardpersonajedescription personajeActual={state} />
      )}
    </>
  );
};
export default Description_paradise;
