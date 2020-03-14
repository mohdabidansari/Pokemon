import React from 'react';
import Pokecard from './Pokecard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokecard id={4} name="Charmander" type="fire" base_experience={62} />
    </div>
  );
}

export default App;
