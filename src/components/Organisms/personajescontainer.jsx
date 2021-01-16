import React from 'react'
import Cardpersonaje from '../Molecules/cardpersonaje'
import withloader from '../Hoc/withloader.js'
const Personajescontainer = ({personajes}) => (
<div  className="ed-grid  grid-container s-mt-4 m-grid-2 s-grid-1 xl-grid-4 lg-grid-3 center">
        
       { personajes.map(c => (
          <Cardpersonaje 
            id = {c.id}
            nombre = {c.nombre}
            img = {c.img}
            years ={c.years.slice(0,3)}
            definition = {c.definition}
            gender = {c.gender}
            />)
          )
       }
        
</div>
)
export default withloader("personajes")(Personajescontainer)