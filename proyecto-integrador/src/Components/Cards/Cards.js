import { Component } from "react";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <article className="card">
                <div className = "card-row">
                    
                    <h4 className="nombrepeli">{this.props.peliculas.title}</h4>
                    <div className="puntaje">{this.props.peliculas.vote_average}</div>
                    <img className="portada" src={"https://image.tmdb.org/t/p/w342" + this.props.peliculas.poster_path} alt="pelicula"/>
      
                </div>
            </article>
        );
    }
}

export default Cards;