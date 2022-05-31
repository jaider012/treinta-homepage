import React from "react";
import "../css/Tunegocio.css";
import p1 from "../assets/1p.png";
import googleplay from "../assets/playStore.svg";
import camisa from "../icons/camisa.svg";

const Tunegocio = () => {
  return (
    <div>
      <div className="section">
        <div className="hero">
          <div>
            <h4>
              <strong className="hero-strong">
                {" "}
                Tu negocio a la mano y en todos tus dispositivos.
              </strong>
            </h4>
          </div>
          <div>
            <p className="parraso">
              ¡No importa el tamaño! Aquí los pequeños negocios, comerciantes y
              emprendedores pueden digitalizar, monitorear y crecer las finanzas
              de su negocio.
            </p>
            <div className="container-small">
              <div className="flex">
                <img className="img-s" src={camisa} alt="bici"></img>
                Registra tus ventas, deudas y gastos.
              </div>
              <div className="flex">
                <img className="img-s" src={camisa} alt="bici"></img>
                Gestiona grandes inventarios desde tu computador.
              </div>
              <div className="flex">
                <img className="img-s" src={camisa} alt="bici"></img>Crea tu
                catálogo virtual y vende en línea.
              </div>
              <div className="flex">
                <img className="img-s" src={camisa} alt="bici"></img>
                Sincroniza tu información automáticamente en tu app y PC.
              </div>
            </div>
          </div>
          <div className="img-container1">
            <img className="imgen1" src={googleplay} alt="googleplay"></img>

            <button className="botontr1">
              <label>Entrar a Treinta en mi PC</label>
            </button>
          </div>
          <div>
            <p>
              Treinta es <label className="colortext"> 100% gratis</label>
            </p>
          </div>
        </div>
        <div className="tuproducto">
          <img src={p1} alt="1p" />
        </div>
      </div>
    </div>
  );
};

export default Tunegocio;
