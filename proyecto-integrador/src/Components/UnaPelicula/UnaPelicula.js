import React, { Component } from "react";
import Cards from "../Cards/Cards.js";


let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class UnaPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null 
        };
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=` + apikey)
            .then(response => response.json())
            .then(data => {
                this.setState({

                    pelicula: data 
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <section>
                {this.state.pelicula.map((p, i) => (
                    <Cards key={i} pelicula={p} />
                ))}
            </section>
        );
    }
}

export default UnaPelicula;
