import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss'
import { Loader } from '../Loader/Loader';
import ReactPaginate from 'react-paginate'
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";


export const MovieList = () => {

    let {currentPage} = useParams();
    let history = useHistory();

    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);

    const pageChange = (data) => {
        currentPage = data.selected + 1;
        getMovies(currentPage);
        history.push(`/movies/${currentPage}`);
    }

    const getMovies = (page) => {
        axios.get(`${process.env.REACT_APP_MOVIE_URL}/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${page}`)
        .then(res => {
            setMovieList(res.data.results);
            setLoading(false);
        })
    }

    useEffect(() => {
        getMovies(currentPage);
    }, [currentPage])

    return (
        <div className="movies">
            <h3>Most Popular Movies</h3>
            {
                !loading ?
                <div>
                     <ReactPaginate
                        previousLabel={'←'}
                        nextLabel={'→'}
                        breakLabel={'...'}
                        pageCount={500}
                        onPageChange={pageChange}
                        initialPage={currentPage-1}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        containerClassName="pagination"
                        pageClassName="page-number"
                        activeClassName="active-page"
                        previousLinkClassName="page-number"
                        nextLinkClassName="page-number"
                        />
                    <div className="movie-list">
                        {movieList.map(movie => {
                            return <MovieCard movie={movie} key={movie.id} />
                        })}
                    </div>
                </div>
               : <Loader />
            }
        </div>
    )
}
