import React, { Component } from 'react';
import GameItem from './GameItem';
import Loader from '../Loader';
import {Game} from '../Data/game'
import GamesProvider from '../Providers/GamesProvider';

type gameListState = {
    games: Array<Game>,
    nextGamesPost: string,
    gamesLength: number,
    showGameLoading: boolean
}

class GameList extends Component<{}, gameListState>{
    constructor(props: any) {
        super(props);

        this.state = {
            games: [],
            nextGamesPost: '',
            gamesLength: 0,
            showGameLoading: true
        };

        this.loadGames('https://api.rawg.io/api/games');
    };    

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    public searchGames = (event: any) =>{
        console.log(event);
        this.loadGamesSearch('https://api.rawg.io/api/games', event.target.value);
    }

    render() {
        return (
            <div className="game-list-panel">
                <div className='col-md-6'>
                    <input className="form-control" placeholder="search" onChange={this.searchGames}></input>
                </div>
                {this.state.games.map(game =>
                    <GameItem key={game.id} data={game} />
                )}

                { this.state.showGameLoading ? <Loader/> : null }
                <button className="load-more-float-button">Games Loaded: {this.state.gamesLength}</button>
            </div>
        );
    };

    public async loadGamesSearch(url: string, searchstring: string){
        this.setState({
            games: [],
            nextGamesPost: '',
            gamesLength: 0,
            showGameLoading: true
        });

        const data = await new GamesProvider().GetGamesSearch(url, searchstring);

        console.log('data', data);
        console.log('games', this.state.games);

        this.setState({
            games: data.results,
            nextGamesPost: data.next,
            gamesLength: this.state.games.length + data.results.length,
            showGameLoading: false
        });
    }

    public async loadGames(url: string) {
        this.setState({showGameLoading: true});
        const data = await new GamesProvider().GetGames(url);

        console.log('data', data);
        console.log('state games', this.state.games);

        this.setState({
            games: [...this.state.games, ...data.results],
            nextGamesPost: data.next,
            gamesLength: this.state.games.length + data.results.length,
            showGameLoading: false
        });
    }

    //Detect the bottom page to load more game
    handleScroll = () => {
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
