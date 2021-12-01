import React from 'react'
import './Navbar.scss';
import Movie from '../../assets/movie.svg';

export const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Movie} width="40" />
            <h1>React Movie</h1>
        </div>
    )
}
