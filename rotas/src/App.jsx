import {Link, Outlet} from "react-router"
import './App.css'

function App() {
  return (
    <div>
      <h2>menu</h2>
      <Outlet />
      <h1>Olá Mundo</h1>
      <Link to='/contato'>Contato</Link>
    </div>
  )
}

export default App
