import React, { Component } from "react";


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
        const id = this.props.match.params.id
        console.log(id);
        
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=` + apikey)
            .then(response => response.json())
            .then(data => {
                this.setState({

                    serie: data,
                    generos: data.genres,
                    cargando: false

                });
                console.log(data)
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            this.state.cargando ?  <img src="/loader.gif" alt="Cargando..." />  : 

            <article className="card">
                <div className = "card-row">
                    
                    <h4 className="nombrepeli">{this.state.serie.title}</h4>
                    <div className="puntaje">{this.state.serie.vote_average}</div>
                    <img className="portada" src={"https://image.tmdb.org/t/p/w342" + this.state.serie.poster_path} alt="serie"/>
                    <div className="estreno">{this.state.serie.release_date}</div>
                    <div className="duracion">{this.state.serie.length}</div>
                    <div className="sinopsis">{this.state.serie.overview}</div>
                    {this.state.generos.map((genero, i) => (<div key={i} className="genero">Genero: {genero.name}</div> ))}




                </div>
            </article>
        );
    }
}

export default UnaSerie;
