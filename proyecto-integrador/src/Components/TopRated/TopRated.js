import React, { Component} from "react";
import "./TopRated.css";
import Cards from "../Cards/Cards.js";
import { Link } from "react-router-dom";

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class PeliculasTopRated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [] 
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + apikey)
            .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        peliculas: data.results.slice(0, 6)
                    });
                })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <section >
                <h2>Top rated</h2>
                {this.state.peliculas.map((pelicula, i) => (
                    <Cards key={i} peliculas={pelicula} />
                ))}
                <Link to="/peliculas">Ver más</Link>
                
            </section>
        );
    }
}

export default PeliculasTopRated;
