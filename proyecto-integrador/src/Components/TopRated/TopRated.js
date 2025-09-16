import React, { Component} from "react";
import "./TopRated.css";
import Cards from "../Cards/Cards.js";
import { Link } from "react-router-dom";

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class PeliculasTopRated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            cargando: true
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + apikey)
            .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        peliculas: data.results.slice(0, 6),
                        cargando: false
                    });
                })
            .catch(error => console.log(error));
    }

    render() {
        return (
            this.state.cargando ?  <img src="/loader.gif" alt="Cargando..." />  : 

            <section className="top-rated">
                <h2>Top rated</h2>
                <div className="cards-container">
                    {this.state.peliculas.map((pelicula, i) => (
                        <Cards key={i} peliculas={pelicula} />
                    ))}
                </div>
                <Link className="ver-mas" to="/toprated">Ver más Top Rated</Link>

            </section>
        );
    }
}

export default PeliculasTopRated;
