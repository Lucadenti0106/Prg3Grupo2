import React, { Component } from "react";
import Cards from "../Cards/Cards.js";

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class SeriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      filtro: "",
      cargando: true,
      page: 1
    };
  }

  componentDidMount() {
    this.fetch(this.state.page); 
  }

  fetch(pagina) {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&page=${pagina}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          series: this.state.series.concat(data.results),
          page: pagina,
          cargando: false
        });
      })
      .catch(console.log);
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
        <h2>Lista de Series</h2>
        <section className="cards-container">
          {this.state.series.map((serie, i) => (
            <Cards key={i} series={serie} />
          ))}
        </section>

        <button className="boton-cargar-mas" onClick={() => this.cargarMas()}>Cargar más</button>
      </div>
    );
  }
}

export default SeriesList;