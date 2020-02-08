import React, { Component } from 'react';
import axios from 'axios';
import GameItem from './GameItem';
import Loader from '../Loader';

class GameList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            nextGamesPost: "",
            gamesLength: 0,
            showGameLoading: true
        };

        this.loadGames('https://api.rawg.io/api/games');
        this.handleScroll = this.handleScroll.bind(this);
    };    

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <div>
                {this.state.games.map(game =>
                    <GameItem key={game.id} data={game} />
                )}
                {
                    this.state.showGameLoading ? <Loader/> : null
                }
                <button className="load-more-float-button">Games Loaded: {this.state.gamesLength}</button>
            </div>
        );
    };

    async loadGames(url) {
        this.setState({showGameLoading: true})
        const data = await axios.get(url);
        console.log(data);
        console.log(this.state.games);

        this.setState({
            games: this.state.games.concat(data.data.results),
            nextGamesPost: data.data.next,
            gamesLength: this.state.games.length,
            showGameLoading: false
        });
    }

    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.loadGames(this.state.nextGamesPost);
        }
    }
}

export default GameList;
