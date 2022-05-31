import React from "react";
import pequeño from "../assets/pequeños-empresarios.jpeg";
import play from "../icons/play.svg";
const Pequeño = () => {
  return (
    <div className="section-video">
      <div className="bg-div-ama"></div>
      <div className="main-container">
        <div className="flex2">
          <div className="video-container">
            {" "}
            <img src={pequeño} alt="pequeño" className="pequeImg"></img>
            <a href="#" className="play-icon-a" placeholder="hola">
              <div className="play-icon">
                <img src={play} alt='play'/>
              </div>
            </a>
          </div>
          <div>
            <h4 className="medium-botton">
              ¡No te compliques con cuentas en papel y lápiz!
              <br />
            </h4>
            <p>
              En Treinta somos los aliados de tu negocio y queremos verte
              crecer. Por eso, te ofrecemos la primera solución digital para
              controlar tus finanzas, gestionar tu inventario, vender en línea y
              recibir cualquier medio de pago.
            </p>
            <p>
              {" "}
              Y lo mejor de todo:{" "}
              <label className="colortext">100% gratis</label>, fácil de usar y
              seguro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pequeño;
