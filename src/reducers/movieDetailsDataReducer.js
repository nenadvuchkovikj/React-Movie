import { GET_MOVIE_DETAILS_ERROR, GET_MOVIE_DETAILS_REQUEST, GET_MOVIE_DETAILS_SUCCESS } from "../constants/constants";

const initialState = {movieData: [], loading: false, error: null};

const movieDetailsDataReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_MOVIE_DETAILS_REQUEST:
            return { ...state, loading: true }
        case GET_MOVIE_DETAILS_SUCCESS: 
            return { ...state, movieData: action.data, loading: false, error: null }
        case GET_MOVIE_DETAILS_ERROR:
            return { ...state, movieData: [], loading: false, error: action.error }
        default:
            return state
    }
}

export default movieDetailsDataReducer