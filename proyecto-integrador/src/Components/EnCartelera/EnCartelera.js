import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards.js";


let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class EnCartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [] 
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apikey)
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    this.setState({
                        peliculas: data.results.slice(0, 4)
                    });
                })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <section>
                                <h2>En Cartelera</h2>
                {this.state.peliculas.map((pelicula, i) => (
                    <Cards key={i} peliculas={pelicula} />
                ))}
                <Link to="/peliculas">Ver más</Link>
            </section>
        );
    }
}

export default EnCartelera;