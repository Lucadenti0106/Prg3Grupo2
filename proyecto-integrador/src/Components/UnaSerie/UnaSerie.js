import React, { Component } from "react";
import "./UnaSerie.css"; 

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class UnaSerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: [],
      generos: [],
      cargando: true
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=` + apikey)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          serie: data,
          generos: data.genres,
          cargando: false
        });
      });
  }

  render() {
    return (this.state.cargando ? <img src="/loader.gif" style={{display: "block", justifySelf: "center", alignSelf: "center"}} alt="Cargando..." /> :
      <article className="una-pelicula">
        <div className="tarjeta-una-pelicula">
          <img
            className="portada-una-pelicula"
            src={"https://image.tmdb.org/t/p/w342" + this.state.serie.poster_path}
            alt="serie"
          />
          <div className="info-una-pelicula">
            <h2 className="nombre-una-pelicula">{this.state.serie.name}</h2>
            <div className="rating-una-pelicula">Rating: {this.state.serie.vote_average}</div>
            <div className="estreno">Estreno: {this.state.serie.first_air_date}</div>
            <div className="sinopsis">Sinopsis:<br></br> {this.state.serie.overview}</div>
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

export default UnaSerie;