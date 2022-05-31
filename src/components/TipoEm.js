import React from "react";
import "../css/tipoem.css";
import tijeras from "../icons/tijeras.svg";
import engrane from "../icons/engrane.svg";
import bici from "../icons/bici.svg";
import cubiertos from "../icons/cubiertos.svg";
import hambuergesa from "../icons/hambuergesa.svg";
import auto from "../icons/auto.svg";
import camisa from "../icons/camisa.svg";
import store from "../icons/6140fb7dafd325231d3a35d5_store.svg";

const TipoEm = () => {
  return (
    <div className="m-10">
      <div className="flex-justify-center ">
        <div>
          <h4 className="medium-heading-2">
            No importa el tipo de negocio o emprendimiento que tengas
            <br />{" "}
            <label className="medium-botton">
              ¡En Treinta somos tus aliados!
            </label>
          </h4>
        </div>
      </div>
      <div className="flex-justify-center ">
        <div className="grid1">
          <div className="grid-item">
            <img src={tijeras} alt="icons" />
            <h4>
              Peluquería
              <br />o barbería
            </h4>
          </div>
          <div className="grid-item">
            <img src={store} alt="icons" />
            <h4>
              Tienda de conveniencia
              <br />o supermercado
            </h4>
          </div>
          <div className="grid-item">
            <img src={engrane} alt="icons" />
            <h3>Ferretería</h3>
          </div>
          <div className="grid-item">
            <img src={camisa} alt="icons" />
            <h4>
              Venta por
              <br />
              catálogo
            </h4>
          </div>

          <div className="grid-item">
            <img src={auto} alt="icons" />
            <h4>Taller</h4>
          </div>
          <div className="grid-item">
            <img src={bici} alt="icons" />
            <h4>
              Servicios profesionales
              <br />o a domicilio
            </h4>
          </div>
          <div className="grid-item">
            <img src={cubiertos} alt="icons" />
            <h4>
              Peluquería
              <br />o barbería
            </h4>
          </div>
          <div className="grid-item">
            <img src={hambuergesa} alt="icons" />
            <h4>
              Peluquería
              <br />o barbería
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipoEm;
