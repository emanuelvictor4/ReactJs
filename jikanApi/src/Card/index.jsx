import React from "react";

//Passa anime como props
function Card({ anime }) {
    return (
        <article className="anime-card">

            {/* Link para abrir o anime no MyAnimeList em nova aba */}
            <a href={anime.url} target="_blank" rel="noopener noreferrer">

                {/* Área da imagem do anime */}
                <div className="card-image">
                    <img
                        // URL da imagem vinda da API
                        src={anime.images.jpg.image_url}
                        // Texto alternativo (importante para acessibilidade)
                        alt={anime.title}
                    />
                </div>
                {/* Informações do anime */}
                <div className="card-info">
                    {/* Título do anime */}
                    <h3>{anime.title}</h3>
                    {/* Nota de avaliação */}
                    <span className="anime-score">
                        ⭐ {anime.score || "N/A"}
                        {/* Se não tiver nota, mostra "N/A" */}
                    </span>
                    {/* Sinopse resumida */}
                    <p className="anime-synopsis">
                        {
                            anime.synopsis
                                // Limita a sinopse para 90 caracteres
                                ? anime.synopsis.slice(0, 90) + "..."
                                // Caso não exista sinopse
                                : "Sem sinopse"
                        }
                    </p>
                </div>
            </a>
        </article>
    )
}

export default Card;
