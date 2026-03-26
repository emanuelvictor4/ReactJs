import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [task, setTask] = useState("");
  const [taskAll, setTaskAll] = useState([]);

  function handleTasks(event) {
    event.preventDefault();
    console.log(task);

    if (task === "") {
      alert("Você precisa informar uma tarefa");
      return;
    }

    let lista = [...taskAll, task];
    setTaskAll(lista);
    localStorage.setItem("task", JSON.stringify(lista));

    setTask("");
  }

  useEffect(() => {
    let lista = localStorage.getItem("task");

    lista = JSON.parse(lista);
    if (lista !== null && lista.length > 0) {
      setTaskAll(lista);
    }
  }, []);

  return (
    <div className="container">
      <h1>Cadastro de tarefas</h1>

      <form onSubmit={handleTasks}>
        <label className="label"> Tarefa </label>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input"
        />
        <button className="btn">Adicionar</button>
      </form>

      <h1 className="titulo">Minhas Tarefas</h1>

      {taskAll.map((item, ind) => (
        <div key={ind}>
          <strong>{ind + 1}º </strong> {item}
          <button className="btn"> Excluir </button>
        </div>
      ))}
    </div>
  );
}

export default App;
