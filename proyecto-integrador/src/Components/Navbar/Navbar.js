import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav>
            <ul class="main-nav">

                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/movies">Películas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/series">Series</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favoritas">Favoritas</Link>
                </li>

            </ul>
            <form className="search-form">
                <input type="text" placeholder="Buscar..." className="form-control" />
                <button type="submit" className="btn btn-primary">Buscar</button>
            </form>

        </nav>
    );
}

export default Navbar;

