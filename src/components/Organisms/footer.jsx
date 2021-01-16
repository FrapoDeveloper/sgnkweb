import React from 'react'
import Instagram from '../../assets/instagram.png'
import Githbu from '../../assets/github.png'

import Linkdedin from '../../assets/linkedin.png'
import Youtube from '../../assets/youtube.png'

import '../../styles/footer.css'
const Footer = () => (
    <footer className="footer-distributed">
 
		<div className="footer-left">
        <div className="title-footer">
            <h3 >Fraporitmos <span className="left">2021</span></h3>
        </div>
 
		<p className="footer-links">
		<a href="https://github.com/FranEspino/">Sitio Web</a>

		<a href="https://github.com/FranEspino/">Contacto</a>

		<a href="https://github.com/FranEspino/">Blog</a>
		</p>
		<p className="footer-company-name">Todos los derechos reservados  &copy; 2021</p>
		</div>
		<div className="footer-center">
		<div>
		<i className="fa fa-map-marker"></i>
		<p><span> La libertad - Peru</span> Chepen</p>
		</div>
 
		<div>
		<i className="fa fa-phone"></i>
		<p>+51 945690254</p>
		</div>
 
		<div>
		<i className="fa fa-envelope"></i>
		<p><a href="mailto:support@company.com">fraporitmos@gmail.com </a></p>

		</div>
 
		</div>
 
		<div className="footer-right">
 
		<p className="footer-company-about">
		<span>Acerca de mi</span>
	    Ingeniero informatico, apasionado por el frontend, desarrollador web full stack &amp; SEO de www.fraporitmos.com
		</p>
 
		<div className="footer-icons">

		<a href="https://www.instagram.com/fraporitmos_tech/"><img src={Instagram} alt=""/></a>
		<a href="https://github.com/FranEspino/"><img src={Githbu}  alt=""/></a>
		<a href="https://www.linkedin.com/in/franespino/"><img src={Linkdedin}  alt=""/></a>
		<a href="https://www.youtube.com/fraporitmos"><img src={Youtube} alt=""/></a>
 
		</div>
 
		</div>
 
		</footer>

)

export default Footer
