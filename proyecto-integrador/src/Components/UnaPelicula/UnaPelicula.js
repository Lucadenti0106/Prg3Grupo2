import React, { Component } from "react";


let apikey = "8d0e3b2d44b27bb5f4c13aad68207667";

class UnaPelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: []
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id);
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=` + apikey)
            .then(response => response.json())
            .then(data => {
                this.setState({

                    pelicula: data 
                });
                console.log(data)
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <article className="card">
                <div className = "card-row">
                    
                    <h4 className="nombrepeli">{this.state.pelicula.title}</h4>
                    <div className="puntaje">{this.state.pelicula.vote_average}</div>
                    <img className="portada" src={"https://image.tmdb.org/t/p/w342" + this.state.pelicula.poster_path} alt="pelicula"/>
                    <div className="estreno">{this.state.pelicula.release_date}</div>
                    <div className="duracion">{this.state.pelicula.length}</div>
                    <div className="sinopsis">{this.state.pelicula.overview}</div>
{/*                     {this.state.pelicula.genres.map((genre) => (<div className="genero">{genre.name}</div> ))}
 */}



                </div>
            </article>
        );
    }
}

export default UnaPelicula;
