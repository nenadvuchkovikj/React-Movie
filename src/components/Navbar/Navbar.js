import React from 'react'
import './Navbar.scss';
import Movie from '../../assets/movie.svg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={'/movies'}>
                <img src={Movie} width="40" />
                <h1>React Movie</h1>
            </Link>
        </div>
    )
}
