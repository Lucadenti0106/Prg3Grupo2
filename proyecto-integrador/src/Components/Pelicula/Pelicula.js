import React, { Component } from "react";
import Cards from "../Cards/Cards.js";

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class PeliculasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      filtro: "",
      cargando: true
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          peliculas: data.results,
          cargando: false
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    

    return (
      this.state.cargando ?  <img src="/loader.gif" alt="Cargando..." />  : 

      <div>
        <h2>Lista de Películas</h2>
        <section className="cards-container">
          {this.state.peliculas.map((pelicula, i) => (
            <Cards key={i} peliculas={pelicula} />
          ))}
        </section>
      </div>
    );
  }
}

export default PeliculasList;