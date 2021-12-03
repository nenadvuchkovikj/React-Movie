import axios from "axios";
import { GET_MOVIE_DETAILS_ERROR, GET_MOVIE_DETAILS_REQUEST, GET_MOVIE_DETAILS_SUCCESS } from "../constants/constants";

export const getMovieDetailsRequest = () => {
    return {type: GET_MOVIE_DETAILS_REQUEST}
}
export const getMovieDetailsSuccess = (moviesData) => {
    return {type: GET_MOVIE_DETAILS_SUCCESS, data: moviesData, error: null}
}
export const getMovieDetailsError = (error) => {
    return {type: GET_MOVIE_DETAILS_ERROR, data: null, error: error}
}

export const getMovieDetailsFromAPI = (movieId) => {
    return dispatch => {
        dispatch(getMovieDetailsRequest());
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`)
            .then(response => {
                const movieDetailsData = response.data;
                dispatch(getMovieDetailsSuccess(movieDetailsData));
            })
            .catch(error => {
                dispatch(getMovieDetailsError(error.message))
            })
    }
}