import React, { useState } from 'react';
import './MovieCard.scss'
import Star from '../../assets/star.svg';
import { Link } from 'react-router-dom';

export const MovieCard = ({movie}) => {

    const [showMoreDetailsButton, setShowMoreDetailsButton] = useState(false);
    
    return (
        <Link to={`/movies/id/${movie.id}`}>
            <div className={`movie-card ${showMoreDetailsButton ? 'movie-hover-bg' : 'movie-normal-bg'}`} 
                style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.poster_path}')`}}
                onMouseOver={() => {
                    setShowMoreDetailsButton(true);
                }}
                onMouseLeave={() => {
                    setShowMoreDetailsButton(false);
                }}
            >
            {showMoreDetailsButton ? 
                <div className="more-details">
                    <p>Details &rarr;</p>
                </div>
                :
                <div className="movie-info">
                    <div className="movie-details">
                        <h6 className="movie-title">{movie.title}</h6>
                        <p className="release-date">{movie.release_date}</p>
                    </div>
                    <div className="movie-popularity">
                        <img src={Star} width="15" alt="Star" />
                        <p>{movie.popularity}</p>
                    </div>
                </div>
            } 
            </div>
        </Link>
    )
}
