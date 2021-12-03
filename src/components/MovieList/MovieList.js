import React, { useEffect } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss'
import { Loader } from '../Loader/Loader';
import ReactPaginate from 'react-paginate'
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesFromAPI } from '../../actions/getMovies';
import { NotFound } from '../NotFound/NotFound';


export const MovieList = () => {

    let {currentPage} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    
    const moviesData = useSelector(state => state.moviesDataReducer.moviesData);
    const isLoading = useSelector(state => state.moviesDataReducer.loading);
    const error = useSelector(state => state.moviesDataReducer.error);

    const pageChange = (data) => {
        currentPage = data.selected + 1;
        history.push(`/movies/${currentPage}`);
    }

    useEffect(() => {
        dispatch(getMoviesFromAPI(currentPage));
    }, [currentPage, dispatch])
    
    return (
        <div className="movies">
            {!error ? 
             <>
                <h3>Most Popular Movies</h3>
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
             </> : null
            }
            {!isLoading ?
                <div>
                    {!error ? 
                        <div className="movie-list">
                            {moviesData.map(movie => {
                                return <MovieCard movie={movie} key={movie.id} />
                            })}
                        </div> : <NotFound />
                    }
                </div> : <Loader />
            }
        </div>
    )
}
