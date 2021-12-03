import axios from "axios";
import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from "../constants/constants";

export const getMoviesRequest = () => {
    return {type: GET_MOVIES_REQUEST}
}
export const getMoviesSuccess = (moviesData) => {
    return {type: GET_MOVIES_SUCCESS, data: moviesData, error: null}
}
export const getMoviesError = (error) => {
    return {type: GET_MOVIES_ERROR, data: null, error: error}
}

export const getMoviesFromAPI = (currentPage) => {
    return dispatch => {
        dispatch(getMoviesRequest());
        axios.get(`${process.env.REACT_APP_MOVIE_URL}/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=${currentPage}`)
            .then(response => {
                const moviesData = response.data.results;
                dispatch(getMoviesSuccess(moviesData));
            })
            .catch(error => {
                dispatch(getMoviesError(error.message))
            })
    }
}