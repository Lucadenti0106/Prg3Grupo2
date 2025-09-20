import React, { Component } from "react";
import './Searchbar.css';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            buscarPelicula: true
        }
    }

    controlarEvento(evento){
        evento.preventDefault();
        this.props.history.push(`/resultados/` + (this.state.buscarPelicula ? "movie" : "tv") + "/" + this.state.search);
    }

    controlarInput(evento){
        this.setState({ search: evento.target.value });
    }
    buscarPelicula(){
        this.setState({ buscarPelicula: true });
    }
    buscarSerie(){
        this.setState({ buscarPelicula: false });
    }

    render() {
        return (
            <section className="form-container">
                <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logo-container">
                    <img className="logo" src="/img/logoprog3.png"/>
                    <h1 className="titulo">RodeCo Movies</h1>
                </div>
                </Link>
                {this.state.buscarPelicula ?
                <div className="botones">
                    <button className="serieP" onClick={() => this.buscarSerie()} >Series</button>
                    <button className="peliculaP" onClick={() => this.buscarPelicula()} >Peliculas</button>
                </div>
                :
                <div className="botones">
                    <button className="serieS" onClick={() => this.buscarSerie()} >Series</button>
                    <button className="peliculaS" onClick={() => this.buscarPelicula()} >Peliculas</button>
                </div>
    }
                    <form className="submit" onSubmit={(evento) => this.controlarEvento(evento)} >
                        <input 
                            className="input" 
                            onChange={(evento) => this.controlarInput(evento)} 
                            name="search" 
                            value={this.state.search}  
                            required
                        />
                        <button className="ver" type="submit" >Search</button>
                    </form>
            </section>
        );
    }
}

export default withRouter(Searchbar);