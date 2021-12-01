import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss'
import { Loader } from '../Loader/Loader';


export const MovieList = () => {

    const [ movieList, setMovieList] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_MOVIE_URL}/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`)
        .then(res => {
            setMovieList(res.data.results);
        })
    }, [])

    return (
        <div className="movies">
            <h3>Most Popular Movies</h3>
            {
                movieList.length > 0 ? 
                <div className="movie-list">
                    {movieList.map(movie => {
                        return <MovieCard movie={movie} key={movie.id} />
                    })}
                </div> : <Loader />
            }
        </div>
    )
}
