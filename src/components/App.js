import React from 'react'
import '../styles/styles.scss'
import '../styles/style.css'
import '../styles/notfound.css'
import Footer from '../components/Organisms/footer'
import Personajes from './Pages/personajes.jsx'
import Titanes from './Pages/titanes.jsx'
import Personajedescription from './Pages/personajedescription.jsx'
import Titandescription from './Pages/titandescription'
import Header from '../components/Organisms/header.jsx'
import Home from '../components/Pages/home.jsx'
import Pagenotfound from './Pages/pagenotfound'
import Episodios from './Pages/episodios.jsx'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

const App =  () => 
  (
    <Router>
      <Header/>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/personajes" exact component={Personajes} /> 
          <Route path="/personajes/:id" exact component={Personajedescription} /> 
          <Route path="/titanes" exact component={Titanes} />
          <Route path="/titanes/:id" exact component={Titandescription} />
          <Route path="/episodios" exact component={Episodios} />
          <Route component={() =>(
            <div className=" container-animation not ed-grid grid-container s-mt-4 m-grid-2 s-grid-1 xl-grid-4 lg-grid-3 center ">
              <Pagenotfound />
            </div>
          )} />
      </Switch>
      <Footer/>
    </ Router >
  )
export default App