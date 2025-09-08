import React, { Component } from "react";
import "./TopRated.css";
import Cards from "../Cards/Cards.js";


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
                this.setState({
                    peliculas: data.results
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <section>
                {this.state.peliculas.map((pelicula, i) => (
                    <Cards key={i} peliculas={pelicula} />
                ))}
            </section>
        );
    }
}

export default PeliculasTopRated;
