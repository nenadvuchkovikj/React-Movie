import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import Time from '../../assets/time.svg';
import './MovieDetails.scss';

export const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`)
        .then(res => {
            setMovie(res.data);
            console.log(res.data);
        });
    }, [])


    return (
        <div className="movie-details-container" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`}}>
            <div className="movie-details">
                <img className="main-picture" src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} width="450" />
                <div>
                    <div className="title">
                        <h1>{movie.title}</h1>
                        <p>{movie.release_date}  ({movie.status})</p>
                    </div>
                    <div className="genres">
                        {movie.genres?.map( genre => {
                            return <div className="genre">{genre.name}</div>
                        })
                        }
                    </div>
                    <div className="overview">
                        <p>{movie.overview}</p>
                    </div>
                    <div className="time">
                        <img src={Time} width="30" />
                        {movie.runtime} min.
                    </div>
                </div>
            </div>

        </div>
    )
}
