import { useState } from "react";

export default function Contador() {
  //A diferença de um estado e uma variável é que a variavel ela depende da linha do código pra mudar (subscrever o valor dela)
  //O state muda o valor no código todo independente da linha do código
  const [cont, setCont] = useState(0);
  const [message, setMessage] = useState("");

  function subtracao() {
    if (cont == 0) {
      setMessage("Tenso nigga");
      return;
    } else {
      setCont(cont - 1);
    }
  }

  return (
    <div>
      <button onClick={() => setCont(cont + 1)}> MAIS </button>
      <h4> {cont} </h4>
      <button onClick={subtracao}> MENOS </button>
      {cont === 0 && <h2>{message}</h2>}
    </div>
  );
}
