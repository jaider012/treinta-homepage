import React from "react";
import "../css/navbar.css";
import logo from "../assets/logoT.svg";
import googleplay from "../assets/playStore.svg";
import person from "../icons/person.svg";
import downarrow from "../icons/down-arrow.svg";
import bici from "../icons/bici.svg";
import auto from "../icons/auto.svg";
import camisa from "../icons/camisa.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="header">
      <nav className="nav">
        <div className="nav-left">
          <img src={logo} alt="logotreinta" />
        </div>
        <div>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <div className="dropdown">
                <div
                  className="dropdown-btn"
                  onClick={(e) => setIsOpen(!isOpen)}
                >
                  Para negocios{" "}
                  <div>
                    <img
                      src={downarrow}
                      alt="downarrow"
                      className="arrow1"
                    ></img>{" "}
                  </div>
                </div>
                <span className="fas"></span>
                {isOpen && (
                  <div className="dropdown-content">
                    <div className="dropdown-item">
                      <img className="img-selcet" src={bici} alt="bici"></img>
                      <div>Administrar tu negocio </div>
                    </div>
                    <div className="dropdown-item">
                      <img className="img-selcet" src={camisa} alt="bici"></img>
                      <div>Treinta para PC </div>{" "}
                    </div>
                    <div className="dropdown-item">
                      <img className="img-selcet" src={auto} alt="bici"></img>
                      <div>Treinta datafono </div>{" "}
                    </div>
                    <div className="dropdown-item">
                      <img className="img-selcet" src={bici} alt="bici"></img>
                      <div>Suerte tu negocio </div>{" "}
                    </div>
                    <div className="dropdown-item">
                      <img className="img-selcet" src={camisa} alt="bici"></img>
                      <div>Administrar tu negocio </div>{" "}
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link">
                Sobre Treinta
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link">
                Contáctanos
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="#" className="nav-menu-link">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="img-container">
          <img className="img1" src={googleplay} alt="googleplay"></img>

          <button className="botontr">
            <img src={person} alt="persona"></img>
            <label>Treinta para Pc</label>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
