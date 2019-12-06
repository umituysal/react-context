import React,{useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {
    const [movies,setMovies] = useContext(MovieContext);
    return (
        <nav>
                <h3>Movies</h3>
                <p>Liste of Movies:{movies.length} </p>
        </nav>
    );
};


export default Nav;