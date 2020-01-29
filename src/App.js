import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };

    this.getDataAxios();
  }

  async getDataAxios() {
    const response = await axios.get("https://api.rawg.io/api/games");
    console.log(response.data.results);
    this.setState({ games: response.data.results })
  } 


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ol>
            {this.state.games.map(game =>
              <li key={game.name}>{game.name}</li>
            )}
          </ol>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React aprenda react
          </a>
        </header>
      </div>
    );
  }
}  


export default App;
