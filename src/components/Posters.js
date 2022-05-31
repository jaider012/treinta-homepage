import React from "react";
import "../css/Posters.css";
import p2 from "../assets/2p.png";
import p3 from "../assets/3p.png";
import p4 from "../assets/4p.png";
import p5 from "../assets/5p.png";
import p6 from "../assets/6p.png";
import p7 from "../assets/7p.png";
import personitas from "../icons/personitas.svg";
import stars from "../icons/stars.svg";
import earth from "../icons/earth.svg";
import googleplay from "../assets/playStore.svg";

const Posters = () => {
  return (
    <div>
      <div className="section2">
        <div className="grid-posters grid-max-width">
          <div className="container-posters">
            <h4 className="medium-3">
              <strong> Administra tu negocio</strong>
            </h4>
            <div className="text-popster">
              <strong>Treinta </strong>
              es la primera app gratuita de Latinoamérica que permite a los
              negocios digitalizar sus finanzas. Administra ventas, gastos,
              deudas, inventario, balance y mucho más, 100% gratis.
            </div>
            <a href="#" className="btn-poster">
              ¡La quiero!
            </a>
          </div>
          <div className="container-large">
            <div className="image-container">
              <img src={p2} alt="posters" className="img-poster2" />
            </div>
          </div>

          <div className="container-large">
            <div className="image-container">
              <img src={p3} alt="posters" className="img-poster2" />
            </div>
          </div>
          <div className="container-posters">
            <h4 className="medium-3">
              <strong> Treinta para PC</strong>
            </h4>
            <div className="text-popster">
              Lo mejor de tu App, ¡ahora disponible en tu computador!
              <br /> ‍Además, agregamos nuevas funciones que te encantarán, como
              la posibilidad de llevar grandes inventarios.
            </div>
            <a href="#" className="btn-poster">
              Quiero intertarlo
            </a>
          </div>

          <div className="container-posters">
            <h4 className="medium-3">
              <strong>Crea tu catálogo virtual</strong>
            </h4>
            <div className="text-popster">
              <strong>¡Vende en línea y multiplica tus ingresos! </strong>
              Crea tu catálogo virtual en menos de 30 segundos. Promociona tus
              productos en redes sociales y recibe pedidos por WhatsApp. Todo de
              forma gratuita.
            </div>
            <a href="#" className="btn-poster">
              Quiero el mio
            </a>
          </div>
          <div className="container-large">
            <div className="image-container">
              <img src={p5} alt="posters" className="img-poster2" />
            </div>
          </div>

          <div className="container-large">
            <div className="image-container">
              <img src={p4} alt="posters" className="img-poster2" />
            </div>
          </div>
          <div className="container-posters">
            <h4 className="medium-3">
              <strong>¡Gana Ingresos Extra!</strong>
            </h4>
            <div className="text-popster">
              Ofrece recargas a tus clientes de celular, plataformas streaming,
              servicios públicos y más, para ganar hasta un 9% de comisión.
            </div>
            <a href="#" className="btn-poster">
              Quiero sobre mas
            </a>
          </div>

          <div className="container-posters">
            <h4 className="medium-3">
              <strong> Dile sí a los pagos con tarjeta</strong>
            </h4>
            <div className="text-popster">
              <strong>El datáfono Treinta </strong>
              está hecho para ti y pensado para todo tipo de negocios y
              comerciantes: bueno, bonito y barato. Con él podrás aceptar pagos
              con tarjetas de crédito y débito nacionales e internacionales.
            </div>
            <a href="#" className="btn-poster">
              ¡La quiero!
            </a>
          </div>
          <div className="container-large">
            <div className="image-container">
              <img src={p6} alt="posters" className="img-poster2" />
            </div>
          </div>

          <div className="container-large">
            <div className="image-container">
              <img src={p7} alt="posters" className="img-poster2" />
            </div>
          </div>
          <div className="container-posters">
            <h4 className="medium-3">
              <strong>Estás a un clic de surtir tu negocio</strong>
            </h4>
            <div className="text-popster">
              Con Treinta puedes abastecer todo tipo de productos para tu
              negocio, recibir a domicilio, ¡y ahorrar tiempo y dinero!
            </div>
            <a href="#" className="btn-poster">
              ¡Conocela aca!
            </a>
          </div>
        </div>
      </div>

      <div className="main-container2">
        <div className="grid-3">
          <div className="div-puntos">
            <img src={personitas} alt="personitas" />
            <div className="text-ti">+5.000.000</div>
            <h4 class="no-bottom-margin fontcolor--gray">Usuarios</h4>
          </div>
          <div className="div-puntos">
            <img src={stars} alt="personitas" />
            <div className="text-ti">4.9/5</div>
            <h4 class="no-bottom-margin fontcolor--gray">En Playstore</h4>
          </div>
          <div className="div-puntos">
            <img src={earth} alt="personitas" />
            <div className="text-ti">18</div>
            <h4 class="no-bottom-margin fontcolor--gray">Paises</h4>
          </div>
        </div>
        <img className="imgen1" src={googleplay} alt="googleplay"></img>
      </div>


      <div className="footer">
        <div className="container-imga">
        <img src={p7} alt="posters" className="img-poster3" />
        </div>
        <div className="container-cajita">
          <div className="texto-footer">
            <h2>
              <strong>¡Treinta es gratis!</strong>
              <br />
              Descarga la app y descubre la mejor forma de administrar las
              finanzas de tu negocio.
            </h2>
          </div>
        </div>
        <div>
          <img className="imgen1" src={googleplay} alt="googleplay"></img>
        </div>
      </div>
    </div>
  );
};

export default Posters;
