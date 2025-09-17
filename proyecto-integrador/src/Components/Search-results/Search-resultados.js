import React, { Component } from "react";
import Cards from "../Cards/Cards.js";
import { withRouter } from "react-router-dom";


let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [] 
        };
    }

    componentDidMount() {
        const query = this.props.match.params.query;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`)
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
            this.state.peliculas.length === 0 ? <h2>No se encontraron resultados</h2> :
            <section className="top-rated">
                <h2>Resultados</h2>
                <div className="cards-container">
                    {this.state.peliculas.map((pelicula) => (
                        <Cards key={pelicula.id} peliculas={pelicula} />
                    ))}
                </div>
            </section>
        );
    }
}

export default withRouter(Resultados);
