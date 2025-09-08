import { Component } from "react";
import { Link } from "react-router-dom";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <article className="info">
                <h3 className="tituloProd">{this.props.peliculas.title}</h3>
                <img className="foto" src={'https://image.tmdb.org/t/p/w342' + this.props.peliculas.poster_path} alt="foto" />
                
          </article>
        );
    }
}

export default Cards;