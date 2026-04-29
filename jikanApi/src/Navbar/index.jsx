import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Jikan App</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/animes">Animes</Link>
        <Link to="/mangas">Mangás</Link>
        <Link to="/personagens">Personagens</Link>
      </div>
    </nav>
  );
}

export default Navbar;