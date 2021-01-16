import React, { useState,useEffect } from "react";
import Episodiocontainer from "../Organisms/episodioscontainer";
import "../../styles/style.css";

const Episodios = () => {
  const [episodios, setEpisodios]  = useState([])
  useEffect( ()=> {
    fetchingApi("https://my-json-server.typicode.com/FrapoDeveloper/capitulos_sgnk/capitulos_sgnk/")

  })

  const fetchingApi = async (url) => {
    const data = await fetch(url)
    const dataJson = await data.json()
    setEpisodios(dataJson)
  }

  return(
    
  <Episodiocontainer episodios = {episodios} />

  )

}



export default Episodios;