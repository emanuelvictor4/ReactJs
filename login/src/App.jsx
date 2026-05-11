import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState(null);

  async function fazerLogin() {
    const resposta = await fetch("http://localhost/api/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, senha }),
    });

    const dados = await resposta.json();

    if (dados.success) {
      setSucesso(true);
      setMensagem("Bem-vindo, " + dados.nome + "!");
    } else {
      setSucesso(false);
      setMensagem("Login ou senha incorretos.");
    }
  }

  return (
    <div className="container">
      <div className="form">

        <div className="header">
          <div className="icon">👤</div>
          <h1>LOGIN</h1>
        </div>

        <div className="campo-grupo">
          <label>Login</label>
          <input
            className="campo"
            placeholder="seu.login" 
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>

        <div className="campo-grupo">
          <label>Senha</label>
          <input
            className="campo"
            type="password"
            placeholder="••••••••"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fazerLogin()}
          />
        </div>

        <button className="btn" onClick={fazerLogin}>
          Entrar
        </button>

        {mensagem && (
          <div className={`msg ${sucesso ? "sucesso" : "erro"}`}>
            {sucesso ? "✅ " : "❌ "}{mensagem}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
