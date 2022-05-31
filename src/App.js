import Navbar from "./components/Navbar";
import "./App.css";
import Tunegocio from "./components/Tunegocio";
import Marcas from "./components/Marcas";
import Pequeño from "./components/Pequeño";
import TipoEm from "./components/TipoEm";
import Posters from "./components/Posters";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="container">
        <div className="rojo">
          <h6>
            Esta no es la pagina Oficial de Treinta, Es una maqueta de la home page de la app
          </h6>
        </div>
        <Tunegocio />
        <div className="comment">
          {" "}
          Los medios escriben sobre <strong> Treinta</strong>
        </div>
        <Marcas />
      </div>
      <Pequeño />
      <TipoEm />
      <Posters />
    </div>
  );
}

export default App;
