import React from 'react'
const Cardpersonaje = ({titulo,capitulo,img,description,link}) => (

    <article class="s-shadow-bottom">
        <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <a href={link} target="_blank" rel="noopener noreferrer">
                 <img src={img} alt={titulo} link={titulo}s/>
            </a>
        </div>
        <div class="s-bg-white s-pxy-2">
            <h3>{titulo}</h3>
            <p class="left">{description}</p>
        </div>
        <footer class="s-cross-center s-bg-grey s-pxy-1 s-radius-br s-radius-bl">
            <p class=" s-to-center">{`Episodio: ${capitulo}`}</p>
        </footer>
    </article>


)

export default Cardpersonaje