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
        const response = await axios.get("https://api.rawg.io/api/games");
        const response2 = await axios.get(response.data.next);
        const data = response.data.results.concat(response2.data.results);

        this.setState({ games: data })
    }
}

export default GameList;
