import React, { Component } from "react";
import Cards from "../Cards/Cards.js";

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class SeriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      filtro: "",
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          series: data.results,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const seriesFiltradas = this.state.series.filter(serie =>
      serie.name.toLowerCase().includes(this.state.filtro.toLowerCase())
    );

    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Filtrar por título"
            value={this.state.filtro}
            onChange={e => this.setState({ filtro: e.target.value })}
          />
        </form>
        <section>
          {seriesFiltradas.map((serie, i) => (
            <Cards key={i} peliculas={serie} />
          ))}
        </section>
      </div>
    );
  }
}

export default SeriesList;