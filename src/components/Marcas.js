import React from "react";
import forse from "../assets/forbes.png";
import elespañol from "../assets/elespañol.png";
import larepublica from "../assets/larepublica.png";
import semana from "../assets/semana.png";
const Marcas = () => {
  return (
    <div>
      <div className="flex">
        <img src={forse} alt="marca" className="marcas" />
        <img src={semana} alt="marca" className="marcas" />
        <img src={larepublica} alt="marca" className="marcas" />
        <img src={elespañol} alt="marca" className="marcas" />
      </div>
    </div>
  );
};

export default Marcas;
