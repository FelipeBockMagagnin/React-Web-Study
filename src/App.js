import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import GameList from './Games/GameList';
import GamePage from './Games/GamePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div>
            <Switch>
              <Route path="/game/:id" component={GamePage} />
              <Route path="/" exact component={GameList} />
            </Switch>
          </div>

        </div>
      </Router>

    );
  }
}

export default App;
