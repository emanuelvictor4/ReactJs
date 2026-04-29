import React from "react";
import "../styles/cardPersonagens.css"

function CardPersonagens({ character }) {
    return (
        <article className="personagens-card">
            <a href={character.url} target="_blank" rel="noopener noreferrer">

                <div className="personagem-image">
                    <img
                        src={character.images.jpg.image_url}
                        alt={character.name}
                    />
                </div>

                <div className="card-info">
                    {/* Nome do personagem */}
                    <h3>{character.name}</h3>

                    {/* Favoritos (equivalente à nota) */}
                    <span className="personagem-score">
                        ❤️ {character.favorites || "N/A"}
                    </span>

                    {/* Sobre (equivalente à sinopse) */}
                    <p className="personagem-synopsis">
                        {character.about
                            ? character.about.slice(0, 90) + "..."
                            : "Sem descrição"}
                    </p>
                </div>

            </a>
        </article>
    );
}

export default CardPersonagens;