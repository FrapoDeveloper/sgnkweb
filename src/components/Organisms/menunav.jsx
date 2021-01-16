import React from "react";
import { NavLink } from "react-router-dom";
const Menunav = () => (
  <nav className="nav lg-cols-4 s-cross-center ed-grid full ">
    <ul className="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1 ul ">
      <li className="lg-mr-3 ">
        <NavLink to="/" activeClassName="activo" className="menu-item">
          Inicio
        </NavLink>
      </li>
      <li className="lg-mr-3">
        <NavLink
          to="/personajes"
          activeClassName="activo"
          className="menu-item"
        >
          Personajes
        </NavLink>
      </li>
      <li className="lg-mr-3">
        <NavLink to="/titanes" activeClassName="activo" className="menu-item">
          Titanes
        </NavLink>
      </li>
      <li className="lg-mr-3">
        <NavLink to="/episodios" activeClassName="activo" className="menu-item">
          Episodios
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Menunav;
