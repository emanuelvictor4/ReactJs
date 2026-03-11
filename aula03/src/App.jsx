import "./App.css";
import Profissao, { Muquifo } from "./Profissao";
import Contador from "./Contador";
import Formulario from "./formulario";

function Pessoa() {
  return (
    <div>
      <strong>Nome: </strong>Maneco <br />
      <Profissao prof="Analista de Sistemas" sal="9500,00" />
    </div>
  );
}

function App() {
  return (
    <div>
      <Pessoa />
      <Contador />
      <Formulario />
    </div>
  );
}

export default App;
