import React, { Component } from "react";
import Cards from "../Cards/Cards.js";

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class SeriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      filtro: "",
      cargando: true
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          series: data.results,
          cargando: false
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    
    return (
      this.state.cargando ?  <img src="/loader.gif" alt="Cargando..." />  : 

      <div>
        <h2 className="nombrepeli">Lista de Series</h2>
        <section className="cards-container">
          {this.state.series.map((serie, i) => (
            <Cards key={i} peliculas={serie} />
          ))}
        </section>
      </div>
    );
  }
}

export default SeriesList;