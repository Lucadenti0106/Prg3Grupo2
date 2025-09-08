import { Component } from "react";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <article className="card">
                <h4 className="nombrePeli">{this.props.peliculas.title}</h4>
                <img className="portada" src={"https://image.tmdb.org/t/p/w342" + this.props.peliculas.poster_path} />
          </article>
        );
    }
}

export default Cards;