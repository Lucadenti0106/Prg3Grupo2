
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: false
        }
    }
    toggleDescripcion(e) {
        e.preventDefault();
        this.setState({ descripcion: !this.state.descripcion });
    }

    render() {
        const data = this.props.peliculas || this.props.series;
        const titulo = data.title
            ? (data.title.length > 25
                ? data.title.slice(0, 25) + "..."
                : data.title)
            : (data.name && data.name.length > 25
                ? data.name.slice(0, 25) + "..."
                : data.name);


        return (
            data.first_air_date === undefined ? /* BRILLANTE solucion a el problema de pelis y series detalle */
                // CARD DE LAS PELICULAS
                !this.state.descripcion ?
                    <Link to={`/detallepelicula/${data.id}`} style={{ textDecoration: "none" }}>
                        <article className="card">
                            <div className="card-row">
                                <div className="nombre-container">
                                    <h4 className="nombrepeli">{titulo}</h4>
                                </div>
                                <div className="puntaje">{data.vote_average}</div>
                                <img className="portada" src={"https://image.tmdb.org/t/p/w342" + data.poster_path} alt="pelicula" />
                            </div>
                            <button className="boton" onClick={(e) => this.toggleDescripcion(e)}>
                                <img src="/img/FlechaParaAbajo.png" />
                            </button>
                        </article>
                    </Link>
                    :
                    <Link to={`/detallepelicula/${data.id}`} style={{ textDecoration: "none" }}>
                        <article className="Xcard">
                            <div className="Xcard-row">
                                <div className="Xnombre-container">
                                    <h4 className="Xnombrepeli">{titulo}</h4>
                                </div>
                                <div className="Xpuntaje">{data.vote_average}</div>
                                <img className="Xportada" src={"https://image.tmdb.org/t/p/w342" + data.poster_path} alt="pelicula" />

                                <article className="Xdescripcion">
                                    <p>{data.overview}</p>
                                </article>

                            </div>

                            <button className="Xboton" onClick={(e) => this.toggleDescripcion(e)}>
                                <img src="/img/FlechaParaArriba.png" />
                            </button>
                        </article>
                    </Link>

                :

                // CARD DE LAS SERIES 
                !this.state.descripcion ?
                    <Link to={`/detalleserie/${data.id}`} style={{ textDecoration: "none" }}>
                        <article className="card">
                            <div className="card-row">
                                <div className="nombre-container">
                                    <h4 className="nombrepeli">{titulo}</h4>
                                </div>
                                <div className="puntaje">{data.vote_average}</div>
                                <img className="portada" src={"https://image.tmdb.org/t/p/w342" + data.poster_path} alt="pelicula" />
                            </div>
                            <button className="boton" onClick={(e) => this.toggleDescripcion(e)}>
                                <img src="/img/FlechaParaAbajo.png" />
                            </button>
                        </article>
                    </Link>

                    :

                    <Link to={`/detalleserie/${data.id}`} style={{ textDecoration: "none" }}>
                        <article className="Xcard">
                            <div className="Xcard-row">
                                <div className="Xnombre-container">
                                    <h4 className="Xnombrepeli">{titulo}</h4>
                                </div>
                                <div className="Xpuntaje">{data.vote_average}</div>
                                <img className="Xportada" src={"https://image.tmdb.org/t/p/w342" + data.poster_path} alt="pelicula" />
                                <article className="Xdescripcion">
                                    <p>{data.overview}</p>
                                </article>
                            </div>
                            <button className="Xboton" onClick={(e) => this.toggleDescripcion(e)}>
                                <img src="/img/FlechaParaArriba.png" />
                            </button>
                        </article>
                    </Link>
        );

    }
}

export default Cards;