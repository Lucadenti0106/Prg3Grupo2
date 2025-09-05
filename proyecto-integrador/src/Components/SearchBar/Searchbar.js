import React from "react";
import './Searchbar.css';
import { Link } from 'react-router-dom';

function Searchbar(props) {
    return (
            <form className="search-form">
                <input type="text" placeholder="Buscar..." className="form-control" />
                <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
    );
}

export default Searchbar;