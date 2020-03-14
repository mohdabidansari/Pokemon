import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {

   // static defaultProps = {
   //    id: 4,
   //    name: 'Chamander',
   //    type: 'fire',
   //    base_experience: 62
   // }
   
  render() { 
   let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`;    
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-h3">{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
