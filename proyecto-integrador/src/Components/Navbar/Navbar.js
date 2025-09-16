import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import Searchbar from "../Searchbar/Searchbar.js";



function Navbar(props) {
    return (
        <header>
        <Searchbar />
        <nav> 
            <ul className="main-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/peliculas">Películas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/series">Series</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favoritas">Favoritas</Link>
                </li>


            </ul>
            

        </nav>
        </header>
    );
}

export default Navbar;

