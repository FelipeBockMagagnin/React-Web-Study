import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      games: [],
      the_witcher: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.getDataAxios();
  }

  async getDataAxios() {
    const response = await axios.get("https://api.rawg.io/api/games");
    const response2 = await axios.get("https://api.rawg.io/api/games/the-witcher-3-wild-hunt");

    console.log(response2.data);
    this.setState({ games: response.data.results, the_witcher: response2.data})
  } 

  handleChange(e) {
    this.setState({ usuario: e.target.value });
  }

  render(){
    let state = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>Usuário: {state.usuario} </p>

          <input value={state.usuario} 
          onChange={this.handleChange}></input>

          <div>
            <span>Nome: {state.the_witcher.name}</span>
            <div>Release: {state.the_witcher.released}</div>
          </div>

          <ol>
            {
              state.games.map(game =>
              <li key={game.name}>{game.name}, rating: {game.rating}</li>
            )}
          </ol>
        </header>
      </div>
    );
  }
}  


export default App;
