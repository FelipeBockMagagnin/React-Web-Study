import React, { Component } from 'react';
import axios from 'axios';
import GameItem from './GameItem';

class GameList extends Component {
    constructor(props) {
        super(props);
        this.gameData();

        this.state = {
            games: [],
        };
    };

    render() {
        return ( <div>{
            this.state.games.map(game =>
                <GameItem key={game.id} data={game} />
        )}</div>);
    };

    async gameData() {
        const data = await axios.get("https://api.rawg.io/api/games");

        this.setState({ games: data.data.results })
    }
}

export default GameList;
