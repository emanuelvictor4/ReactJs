import "./App.css";
import Profissao, { Muquifo } from "./Profissao";
import Contador from "./Contador";

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
    </div>
  );
}

export default App;
