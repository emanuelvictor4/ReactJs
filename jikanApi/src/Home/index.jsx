
import { useEffect, useState } from "react";
import AnimeCard from "../Card";
import "../styles/home.css";

function Home() {
  const [topAnimes, setTopAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        //Chama a API
        const res = await fetch("https://api.jikan.moe/v4/top/anime");
        const data = await res.json(); //Guarda no Json
        setTopAnimes(data.data.slice(0, 5)); // pega só 5 elementos do array
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    };

    //Caso de certo ele chama aqui no final
    fetchTop();
  }, []);

  return (
    <section className="home">
      {/* 🔥 Tela inicial */}
      <div className="home-hero">
        <h1>Jikan Api</h1>
        <p>
          Jikan (時間) é uma API não oficial e de código aberto para a comunidade
          de anime e mangá — MyAnimeList.
        </p>
      </div>

      {/* Lista de Animes */}
      <div className="home-section">
        <h2>🔥 Top Animes</h2>

        {/*Enquanto estiver carregando (fazendo a requisição da api)*/}
        {loading ? (
          <p>Carregando...</p>
        ) : (
          //Usa map pra percorrer o json
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

export default Home;