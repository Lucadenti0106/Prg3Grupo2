import React, { Component } from "react";
import Cards from "../Cards/Cards.js";
import "./EnCarteleraFull.css";

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class EnCarteleraFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasFiltradas: [],
      textoInput: "",
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

  filtrar = (e) => {
    const texto = e.target.value;
    const peliculasFiltradas = this.state.peliculas.filter((peli) => {
      const titulo = (peli && (peli.title || peli.name || "")).toLowerCase();
      return titulo.includes(texto.toLowerCase());
    });
    this.setState({ peliculasFiltradas, textoInput: texto });
  };

  render() {
    if (this.state.cargando) {
      return <img src="/loader.gif" alt="Cargando..." />;
    }

    const hayFiltro = this.state.textoInput.length !== 0;
    const lista = hayFiltro ? this.state.peliculasFiltradas : this.state.peliculas;

    return (
      <div>
        <section className="top-rated">
          <h1 className="nombrepeli">Películas en Cartelera</h1>
          <div className="cabecera">

          <input
            className="filtro-input"
            placeholder="Filtrar Películas"
            onChange={this.filtrar}
            value={this.state.textoInput}
            />
            


            </div>

          <div className="cards-container">
            {lista.map((pelicula, i) => (
              <Cards key={i} peliculas={pelicula} />
            ))}
          </div>

        </section>
          <button className="boton-cargar-mas" onClick={() => this.cargarMas()}>
            Cargar más
          </button>
      </div>
    );
  }
}

export default EnCarteleraFull;