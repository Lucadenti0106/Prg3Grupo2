import React, { Component } from "react";

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
    return (this.state.cargando ?  <img src="/loader.gif" alt="Cargando..." />  : 
      <article className="card">
        <div className="card-row">
          <h4 className="nombrepeli">Nombre: {this.state.pelicula.title}</h4>
          <div className="puntaje">Rating: {this.state.pelicula.vote_average}</div>
          <img
            className="portada"
            src={"https://image.tmdb.org/t/p/w342" + this.state.pelicula.poster_path}
            alt="pelicula"
          />
          <div className="estreno">Estreno: {this.state.pelicula.release_date}</div>
          <div className="duracion">Duracion: {this.state.pelicula.runtime}</div>
          <div className="sinopsis">Sinopsis: {this.state.pelicula.overview}</div>

          {this.state.generos.map((genero, i) => (
            <div key={i} className="genero">
              Genero: {genero.name}
            </div>
          ))}
        </div>
      </article>
  )}
}

export default UnaPelicula;