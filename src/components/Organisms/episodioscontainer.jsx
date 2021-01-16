import React from 'react'
import Cardepisodios from '../Molecules/cardepisodios'
import '../../styles/style.css'
import withloader from '../Hoc/withloader.js'

const Episodioscontainer = ({episodios}) => (   
    <>
    <h1 className="titulo-episodios">Episodios de Sgnk The final season</h1>
    <div  className="ed-grid  grid-container s-mt-1 m-grid-2 s-grid-1 xl-grid-3 lg-grid-3 center">

        { episodios.map(e => (
          <Cardepisodios 
            id = {e.id}
            titulo = {e.titulo}
            capitulo = {e.capitulo}
            img = {e.img}
            description ={e.description}
            link = {e.link}
            />)
          )
       }
    </div>
    </>

)
export default withloader("episodios")(Episodioscontainer)
