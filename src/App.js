import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar/Navbar'
import GameList from './Games/GameList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      games: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getDataAxios();
  }

  render() {
    let state = this.state;
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="form-row">
            <div className="col-md-6">
              <p>Usuário: {state.usuario} </p>
              <input className='form-control' value={state.usuario} onChange={this.handleChange}></input>
            </div>

            <div className="col-md-6">
              <GameList/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async getDataAxios() {
    const response = await axios.get("https://api.rawg.io/api/games");
    console.log(response);

    this.setState({ games: response.data.results })
  }

  handleChange(e) {
    this.setState({ usuario: e.target.value });
  }
}


export default App;
