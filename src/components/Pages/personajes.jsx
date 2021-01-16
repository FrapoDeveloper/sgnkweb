import Personajes_marley from '../Organisms/personajesmarley'
import Personajes_paradise from '../Organisms/personajesparadise'
import React from 'react'
import "../../styles/characters.css";

const Personajes = () => {

  return(

  <div>
    <h2 className="Bando">Personajes de la isla Paradise</h2>
    <Personajes_paradise />
    <h2 className="Bando">Personajes del imperio Marleyano</h2>
    <Personajes_marley />
  </div>



  )

}



export default Personajes;
