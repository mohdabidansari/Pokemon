import React, { Component } from "react";
import "./Pokecard.css";

let padToThree = (num) => (num<=999) ? `00${num}`.slice(-3) : num;

class Pokecard extends Component {

   // static defaultProps = {
   //    id: 4,
   //    name: 'Chamander',
   //    type: 'fire',
   //    base_experience: 62
   // }
   
  render() { 
   //let id = 
   let imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(this.props.id)}.png`;    
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
         <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
