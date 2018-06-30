import React, { Component } from 'react';
// import axios from "axios";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import PokemonCard from './components/PokemonCard';


class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    pokemon: [1,2,3,4,5,6,7,8,9,10,11,12]
  }

  // componentDidMount() {
  //   // GET request for remote image
  //   axios({
  //     method:'get',
  //     url:'http://bit.ly/2mTM3nY'
  //   })
  //     .then(function(response) {
  //     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <div className="container">
          <Jumbotron/>
          <main>
            <div className="row">
              {this.state.pokemon.map((onePokemon, i) => 
              <PokemonCard key={i}/>)}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
