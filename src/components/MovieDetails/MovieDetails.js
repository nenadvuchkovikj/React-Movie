import React, {useEffect} from 'react';
import {useParams} from 'react-router';
import Time from '../../assets/time.svg';
import {Loader} from '../Loader/Loader';
import './MovieDetails.scss';
import BlackStar from '../../assets/black-star.svg';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetailsFromAPI } from '../../actions/getMovieDetails';
import { NotFound } from '../NotFound/NotFound';

export const MovieDetails = ({currentPage}) => {
    const {movieId} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const movieData = useSelector(state => state.movieDetailsDataReducer.movieData);
    const isLoading = useSelector(state => state.movieDetailsDataReducer.loading);
    const error = useSelector(state => state.movieDetailsDataReducer.error);

    useEffect(() => {
       dispatch(getMovieDetailsFromAPI(movieId));
    }, [movieId, dispatch]);

    const goBack = () => {
        history.goBack();
    }

    return (
        <>
        {!isLoading ?
            <>
                {!error ?
                    <div className="movie-details-container" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movieData?.backdrop_path}')`}}>
                        <div className="back-button" onClick={goBack}>&#8249; Back</div>
                        <div className="movie-details">
                            <img className="main-picture" alt="Poster" src={`https://image.tmdb.org/t/p/w1280${movieData.poster_path}`} width="450" />
                            <div className="movie-details-info">
                                <div className="title">
                                    <h1>{movieData.title}</h1>
                                    <p>{movieData.release_date}  ({movieData.status})</p>
                                </div>
                                <div className="genres">
                                    {movieData.genres?.map( genre => {
                                        return <div className="genre" key={genre.id}>{genre.name}</div>
                                    })
                                    }
                                </div>
                                <div className="overview">
                                    <p>{movieData.overview}</p>
                                </div>
                                <div className="time-rating">
                                    <div className="time">
                                        <img src={Time} width="30" alt="Time" />
                                        {movieData.runtime} min.
                                    </div>
                                    <div className="rating">
                                        <img src={BlackStar} width="30" alt="Star" />
                                        {movieData.vote_average}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <NotFound />
                }
            </> : <div className="loader"><Loader /></div>}
        </>
        
    )
}
