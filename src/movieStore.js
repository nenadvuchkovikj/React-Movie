import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import movieDetailsDataReducer from "./reducers/movieDetailsDataReducer";
import moviesDataReducer from "./reducers/moviesDataReducer";


const rootReducer = combineReducers({moviesDataReducer, movieDetailsDataReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));