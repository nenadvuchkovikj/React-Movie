import { GET_MOVIES_ERROR, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS} from "../constants/constants";

const initialState = {moviesData: [], loading: false, error: null};

const moviesDataReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_MOVIES_REQUEST:
            return { ...state, loading: true }
        case GET_MOVIES_SUCCESS:
            return { ...state, moviesData: action.data, loading: false, error: null }
        case GET_MOVIES_ERROR:
            return { ...state, moviesData: [], loading: false, error: action.error}
        default:
            return state
    }
}

export default moviesDataReducer