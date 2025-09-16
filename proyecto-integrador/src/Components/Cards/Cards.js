import { Component } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <Link to={`/detallepelicula/${this.props.peliculas.id}`} style={{ textDecoration: "none"}}>
                <article className="card">
                    <div className = "card-row">
                        <div className="nombre-container">
                            <h4 className="nombrepeli">{this.props.peliculas.title}</h4>
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