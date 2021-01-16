import React, { useState,useEffect } from "react";
import Personajescontainer from "../Organisms/personajescontainer.jsx";
import "../../styles/style.css";

const Personajes_paradise = () => {
  const [personajes, setPersonajes]  = useState([])
  useEffect( ()=> {
    fetchingApi("https://my-json-server.typicode.com/FrapoDeveloper/personajes_paradise/personajes_paradise")

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



export default Personajes_paradise;