import React, { Component } from 'react';
import axios from 'axios';
import GameItem from './GameItem';

class GameList extends Component {
    constructor(props) {
        super(props);
        this.loadGames('https://api.rawg.io/api/games');

        this.state = {
            games: [],
            nextGamesPost: "",
            gamesLength: 0
        };

        this.loadMoreGamesClick = this.loadMoreGamesClick.bind(this);
    };

    loadMoreGamesClick() {
        this.loadGames(this.state.nextGamesPost);
    }

    render() {
        return ( 
            <div>
                { this.state.games.map(game =>
                    <GameItem key={game.id} data={game} />
                )}
                <button className="load-more-float-button" onClick={this.loadMoreGamesClick}>Load More: {this.state.gamesLength}</button>
            </div>
            
        );
    };

    async loadGames(url){
        const data = await axios.get(url);
        console.log(data);
        this.setState({ games: this.state.games.concat(data.data.results), nextGamesPost: data.data.next })
        this.setState({gamesLength: this.state.games.length})
    }
}

export default GameList;
