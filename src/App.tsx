import React, { Component } from 'react';
import './styles/App.css';
import Navbar from './Pages/Navbar/Navbar';
import GameList from './Pages/Games/GameList';
import Welcome from './Pages/Welcome';
import GamePage from './Pages/Games/GamePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './Pages/Login/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div>
            <Switch>
              <Route path="/game/:id" component={GamePage} />
              <Route path="/" exact component={Welcome} />
              <Route path="/games" exact component={GameList} />
              <Route path="/login" exact component={LoginPage} />
            </Switch>
          </div>

        </div>
      </Router>

    );
  }
}

export default App;
