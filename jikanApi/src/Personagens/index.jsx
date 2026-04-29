import { useEffect, useState } from "react";
import CardPersonagens from "../CardPersonagens"
import "../styles/personagens.css";

function Personagens() {
  const [favPersonagens, setFavPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonagens = async () => {
      try {
        const res = await fetch("https://api.jikan.moe/v4/top/characters");
        const data = await res.json();
        setFavPersonagens(data.data.slice(0, 10));
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonagens();
  }, []);

  return (
    <section className="characters">
      <h2>🧑 Personagens Populares</h2>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="character-grid">
          {favPersonagens.map(char => (
            <CardPersonagens key={char.mal_id} character={char} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Personagens;