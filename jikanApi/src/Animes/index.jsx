
import { useEffect, useState } from "react";
import AnimeCard from "../Card";
import "../styles/animes.css";

function Animes() {
  const [topAnimes, setTopAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const res = await fetch("https://api.jikan.moe/v4/top/anime");
        const data = await res.json();
        setTopAnimes(data.data.slice(0, 20));
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTop();
  }, []);

  return (
    <section className="animes">
      {/* Lista de Animes */}
      <div className="animes-section">
        <h2>🔥 Top Animes</h2>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div className="anime-grid">
            {topAnimes.map(anime => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Animes;