import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import Cards from "../../Components/Cards/Cards.js";
import { Component } from "react";
import './Favoritas.css'

let apikey = "8d0e3b2d44b27bb5f4c13aad68207667"

class Favoritas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritas: []
        }
    }

    componentDidMount() {
        let listaIdFavoritos = []
        let datosEnLocalStorage = localStorage.getItem('LSFavoritos')
        if (datosEnLocalStorage !== null) {
            listaIdFavoritos = JSON.parse(datosEnLocalStorage)
            let listaIdFavoritosAux = []

            listaIdFavoritos.map(id => {
                if (id < 0) {
                    fetch(`https://api.themoviedb.org/3/tv/${-id}?api_key=` + apikey)
                        .then(response => response.json())
                        .then(data => {
                            listaIdFavoritosAux.push(data)
                            this.setState({
                                favoritas: listaIdFavoritosAux
                            })
                            console.log(this.state.favoritas)
                        })
                        .catch(error => console.log(error))
                } else {
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=` + apikey)
                        .then(response => response.json())
                        .then(data => {
                            listaIdFavoritosAux.push(data)
                            this.setState({
                                favoritas: listaIdFavoritosAux
                            })
                            console.log(this.state.favoritas)
                        })
                        .catch(error => console.log(error))
                }
            })

        }
    }

    limpiarFavoritas() {
        localStorage.removeItem('LSFavoritos');
        this.setState({ favoritas: [] });
    }

    render() {
        const peliculas = this.state.favoritas.filter(pelicula => pelicula.first_air_date === undefined);
        const series = this.state.favoritas.filter(serie => serie.first_air_date !== undefined);
        return (
            <React.Fragment>
                <Navbar />
                <section className="favoritas-header">
                    {this.state.favoritas.length > 0 ? (
                        <div>
                            <div>
                                <button onClick={() => this.limpiarFavoritas()} className="botonlimpiar">
                                    Limpiar favoritas
                                </button>
                            </div>
                            <section className="top-rated">
                                <h3>Peliculas Favoritas</h3>
                                <div className="cards-container">
                                    {peliculas.map((peli, i) => (
                                        <Cards key={peli.id ? peli.id : i} peliculas={peli} />
                                    ))}
                                </div>
                            </section>
                            <section className="top-rated">
                                <h3>Series Favoritas</h3>
                                <div className="cards-container">
                                    {series.map((serie, i) => (
                                        <Cards key={serie.id ? serie.id : i} series={serie} />
                                    ))}
                                </div>
                            </section>
                        </div>

                    ) : (
                        <h2>No hay Favoritas</h2>
                    )}
                </section>

                <Footer />
            </React.Fragment>
        )
    }
}
export default Favoritas;
