
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descripcion: false,
            favorito: false
        }
    }

    componentDidMount() {
        const id = this.props.peliculas.id; 
        let datosFav = localStorage.getItem('LSFavoritos');
        if (datosFav !== null) {
            let favoritos = JSON.parse(datosFav);
            if (favoritos.includes(id)) { // SI EL ID ESTA EN LA LISTA D FAVS ENTCS ES FAV ES COMO EL "IN" EN PYHTON
                this.setState({ favorito: true });
            }
        }

    }
    toggleDescripcion(e) {
        e.preventDefault();
        this.setState({ descripcion: !this.state.descripcion });
    }
    agregarAFavoritos(e) {
        e.preventDefault();
        const id = this.props.peliculas.id
        console.log(`Se ha agregado correctamente el personaje con el id ${id}`);
        let favoritos = []
        let datosFav = localStorage.getItem('LSFavoritos')
        if (datosFav !== null) {
            favoritos = JSON.parse(datosFav)
        }
        favoritos.push(id)
        localStorage.setItem('LSFavoritos', JSON.stringify(favoritos))
        console.log(localStorage);
        this.setState({
            favorito: true
        })
    }
    sacarDeFavoritos(e) {
        e.preventDefault();
        const id = this.props.peliculas.id
        console.log(`Se ha eliminado correctamente el personaje con el id ${id}`);
        let favoritos = []
        let datosFav = localStorage.getItem('LSFavoritos')
        if (datosFav !== null) {
            favoritos = JSON.parse(datosFav)
        }
        favoritos = favoritos.filter(favId => favId !== id);
        localStorage.setItem('LSFavoritos', JSON.stringify(favoritos));

        this.setState({
            favorito: false
        })
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
                            {this.state.favorito ?
                                <button onClick={(e) => this.sacarDeFavoritos(e)}>Quitar a favoritos</button>
                                :
                                <button onClick={(e) => this.agregarAFavoritos(e)}>Agregar a favoritos</button>
                            }
                            <button className="boton" onClick={(e) => this.toggleDescripcion(e)}>
                                <img src="/img/FlechaParaAbajo.png"/>
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