import React, { Component } from "react";
import Menu from "../../assets/list.png";
import "../../styles/header.css";
import Menunav from "../Organisms/menunav";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.operation = this.operation.bind(this);

    this.state = {
      show: false,
    };
  }
  operation = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <header className="main-header header">
        <div className="ed-grid lg-grid-5 container">
          <div className="s-cross-center s-main-center lg-main-start head">
            <NavLink to={`/`}>
              <img
                className="logo"
                alt="logo"
                width="150px"
                src="https://vignette.wikia.nocookie.net/shingeki-no-kyojin/images/8/89/Wiki-wordmark.png/revision/latest?cb=20180308212104&path-prefix=es"
              />
            </NavLink>
          </div>
          <Menunav />
          <div>
            <img
              onClick={() => this.operation()}
              src={Menu}
              width="30px"
              height="30px"
              alt="Menu"
              className="menu-icon"
            />
          </div>
        </div>
        {this.state.show ? (
          <div className="menu-table">
            <li>
              <NavLink to="/" activeClassName="activo" className="menu-movil">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/personajes"
                activeClassName="activo"
                className="menu-movil"
              >
                Personajes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/titanes"
                activeClassName="activo"
                className="menu-movil"
              >
                Titanes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/episodios"
                activeClassName="activo"
                className="menu-movil"
              >
                Episodios
              </NavLink>
            </li>
          </div>
        ) : null}
      </header>
    );
  }
}

export default Header;
