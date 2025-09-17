import { Component } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const titulo = this.props.peliculas.title
    ? (this.props.peliculas.title.length > 25
        ? this.props.peliculas.title.slice(0, 25) + "..."
        : this.props.peliculas.title)
    : (this.props.peliculas.name.length > 25
        ? this.props.peliculas.name.slice(0, 25) + "..."
        : this.props.peliculas.name);

        return (
            <Link to={`/detallepelicula/${this.props.peliculas.id}`} style={{ textDecoration: "none"}}>
            <article className="card">
                <div className="card-row">
                <div className="nombre-container">
                    <h4 className="nombrepeli">{titulo}</h4>
                </div>
                <div className="puntaje">{this.props.peliculas.vote_average}</div>
                <img className="portada" src={"https://image.tmdb.org/t/p/w342" + this.props.peliculas.poster_path} alt="pelicula"/>
                </div>
            </article>
            </Link>
        );
    }
}

export default Cards;