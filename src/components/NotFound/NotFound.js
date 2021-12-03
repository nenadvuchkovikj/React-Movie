import React from 'react'
import './NotFound.scss'
import { useHistory } from "react-router-dom";

export const NotFound = () => {

    const history = useHistory();

    const redirectToHome = () => {
        history.push('/');
    }

    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page not found!</h2>
            <button className="movie-button" onClick={redirectToHome}>Take me back</button>
        </div>
    )
}
