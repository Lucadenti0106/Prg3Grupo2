import React, { Component } from "react";
import Cards from "../Cards/Cards.js";

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class EnCarteleraFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      filtro: "",
      cargando: true,
      page: 1
    };
  }

  componentDidMount() {
    this.fetch(this.state.page);
  }

  fetch(pagina) {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&page=${pagina}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          peliculas: this.state.peliculas.concat(data.results),
          page: pagina,
          cargando: false
        });
      })
      .catch(error => console.log(error));
  }

  cargarMas() {
    let cargar = this.state.page + 1;
    this.fetch(cargar);
  }

  render() {
    return this.state.cargando ? (
      <img src="/loader.gif" alt="Cargando..." />
    ) : (
      <div>
        <section className="top-rated">
          <div className="cards-container">
            {this.state.peliculas.map((pelicula, i) => (
              <Cards key={i} peliculas={pelicula} />
            ))}
          </div>
           <button className="boton-cargar-mas"onClick={() => this.cargarMas()}>
          Cargar más
        </button>
        </section>

       
      </div>
    );
  }
}

export default EnCarteleraFull;