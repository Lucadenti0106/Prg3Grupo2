import React, { Component } from "react";
import './Searchbar.css';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    controlarEvento(evento){
        evento.preventDefault();
        this.props.history.push(`/search/` + this.state.search);
    }

    controlarInput(evento){
        this.setState({ search: evento.target.value });
    }

    render() {
        return (
            <section>
                    <form className="submit" onSubmit={(evento) => this.controlarEvento(evento)}>
                        <input 
                            className="input" 
                            onChange={(evento) => this.controlarInput(evento)} 
                            name="search" 
                            value={this.state.search}  
                        />
                        <button className="ver" type="submit">Search</button>
                    </form>
            </section>
        );
    }
}

export default Searchbar;