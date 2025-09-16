import React, { Component } from "react";
import "./UnaPelicula.css";

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class UnaPelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: [],
      generos: [],
      cargando: true
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=` + apikey)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pelicula: data,
          generos: data.genres,
          cargando: false
        });
      });
  }

  render() {
    return (this.state.cargando ? <img src="/loader.gif" alt="Cargando..." /> :
      <article className="una-pelicula">
        <div className="tarjeta-una-pelicula">
          <img
            className="portada-una-pelicula"
            src={"https://image.tmdb.org/t/p/w342" + this.state.pelicula.poster_path}
            alt="pelicula"
          />
          <div className="info-una-pelicula">
            <h2 className="nombre-una-pelicula">{this.state.pelicula.title}</h2>
            <div className="rating-una-pelicula">Rating: {this.state.pelicula.vote_average}</div>
            <div className="estreno">Estreno: {this.state.pelicula.release_date}</div>
            <div className="duracion">Duracion: {this.state.pelicula.runtime} min</div>
            <div className="sinopsis">Sinopsis:<br></br> {this.state.pelicula.overview}</div>
            <br></br>
            <div className="generos-una-pelicula">
              <span>Generos: </span>
              {this.state.generos.map((genero, i) => (
                <span key={i} className="genero">
                  {genero.name}, 
                </span>
              ))}
            </div>
          </div>

        </div>
      </article>
    )
  }
}

export default UnaPelicula;