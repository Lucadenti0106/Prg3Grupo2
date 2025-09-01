import React from "react";
import './styles.css';
import { Link } from 'react-router-dom'; 

function Navbar(props) {
  return (
    <nav>
        <ul class="main-nav">

            <b><li><Link to="/">Home</Link></li></b>
            <b><li><Link to="/about">About</Link></li></b>
            <b><li><Link to="/personajes">Personajes</Link></li></b>
        
        </ul>
        <ul class="user">
            <li> {props.name} <img src="./assets/img/user.jpg" alt=""/></li>
        </ul>
    </nav>
);
}

export default Navbar;

<nav>
            <ul class="nav nav-tabs my-4">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="movies.html">Películas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="series.html">Series</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="favorites.html">Favoritas</a>
                </li>
            </ul>
            <!-- Buscador -->
            <form class="search-form" action="results.html" method="get">
                <input type="text" class="" name="searchData" placeholder="Buscar..." value="">
                <button type="submit" class="btn btn-success btn-sm">Buscar</button>
            </form>
        </nav>