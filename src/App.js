import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar/Navbar'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      games: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getDataAxios();
  }  

  render(){
    let state = this.state;
    return (
      <div className="App">
        <Navbar/>

        <div className="container">        
          <div className="row">
            <p>Usuário: {state.usuario} </p>

            <input className='input-field col s12' value={state.usuario} 
            onChange={this.handleChange}></input>
          </div>
          

          <ol>
            {
              state.games.map(game =>
              <li key={game.name}>{game.name}, rating: {game.rating}</li>
            )}
          </ol>
        </div>
      </div>
    );
  }

  async getDataAxios() {
    const response = await axios.get("https://api.rawg.io/api/games");
    console.log(response);

    this.setState({ games: response.data.results})
  } 

  handleChange(e) {
    this.setState({ usuario: e.target.value });
  }
}  


export default App;
