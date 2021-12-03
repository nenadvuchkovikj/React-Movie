import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import Time from '../../assets/time.svg';
import {Loader} from '../Loader/Loader';
import './MovieDetails.scss';
import BlackStar from '../../assets/black-star.svg';
import { useHistory } from "react-router-dom";

export const MovieDetails = ({currentPage}) => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const {movieId} = useParams();
    let history = useHistory();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`)
        .then(res => {
            setMovie(res.data);
            setLoading(false);
        });
    }, [movieId]);

    const goBack = () => {
        history.goBack();
    }


    return (
        <>
        {!loading ? 
                <div className="movie-details-container" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`}}>
                <div className="back-button" onClick={goBack}>&#8249; Back</div>
                <div className="movie-details">
                    <img className="main-picture" alt="Poster" src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} width="450" />
                    <div className="movie-details-info">
                        <div className="title">
                            <h1>{movie.title}</h1>
                            <p>{movie.release_date}  ({movie.status})</p>
                        </div>
                        <div className="genres">
                            {movie.genres?.map( genre => {
                                return <div className="genre" key={genre.id}>{genre.name}</div>
                            })
                            }
                        </div>
                        <div className="overview">
                            <p>{movie.overview}</p>
                        </div>
                        <div className="time-rating">
                            <div className="time">
                                <img src={Time} width="30" alt="Time" />
                                {movie.runtime} min.
                            </div>
                            <div className="rating">
                                <img src={BlackStar} width="30" alt="Star" />
                                {movie.vote_average}
                            </div>
                        </div>
                    </div>
                </div>

            </div> : <div className="loader"><Loader /></div>}
        </>
        
    )
}
