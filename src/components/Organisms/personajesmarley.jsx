import React, { useState,useEffect } from "react";
import Personajescontainer from "../Organisms/personajescontainer.jsx";
import "../../styles/style.css";

const Personajes_marley = () => {
  const [personajes, setPersonajes]  = useState([])
  useEffect( ()=> {
    fetchingApi("https://my-json-server.typicode.com/FrapoDeveloper/personajes_marley/personajes_marley")

  })

  const fetchingApi = async (url) => {
    const data = await fetch(url)
    const dataJson = await data.json()
    setPersonajes(dataJson)
  }

  return(
    
  <Personajescontainer personajes = {personajes} />

  )

}



export default Personajes_marley;