import React from "react";
import Navbar from "../../Components/Navbar/Navbar.js";
import Footer from "../../Components/Footer/Footer.js";
import Cards from "../../Components/Cards/Cards.js";
import { Component } from "react";
import { Link } from "react-router-dom";

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
            })
        }
    }

    limpiarFavoritas() {
        localStorage.removeItem('LSFavoritos');
        this.setState({ favoritas: [] });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <section className="top-rated">
                    {this.state.favoritas.length > 0 ? (
                        <button onClick={() => this.limpiarFavoritas()} className="boton-limpiar">
                            Limpiar favoritas
                        </button>
                    ) : (
                        <h2>Favoritas</h2>
                    )}
                    <div className="cards-container">
                        {this.state.favoritas.map(function (pelicula, i) {
                            return <Cards key={pelicula.id ? pelicula.id : i} peliculas={pelicula} />;
                        })}
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        )
    }
}
export default Favoritas;
