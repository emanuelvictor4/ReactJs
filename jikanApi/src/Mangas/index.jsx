
import { useEffect, useState } from "react";
import AnimeCard from "../Card";
import "../styles/mangas.css";

function Mangas() {
  const [topMangas, setTopMangas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const res = await fetch("https://api.jikan.moe/v4/top/manga");
        const data = await res.json();
        setTopMangas(data.data.slice(0, 20)); //Pega 20 elementos do json
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTop();
  }, []);

  return (
    <section className="mangas">
      {/* Lista de Mangás */}
      <div className="mangas-section">
        <h2>🔥 Mangás</h2>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div className="anime-grid">
            {topMangas.map(anime => (
              <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Mangas;