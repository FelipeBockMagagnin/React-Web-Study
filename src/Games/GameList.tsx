import React, { Component } from 'react';
import axios from 'axios';
import GameItem from './GameItem';
import Loader from '../Loader';

type gameListState = {
    games: Array<game>,
    nextGamesPost: string,
    gamesLength: number,
    showGameLoading: boolean
}


export interface game {
    id: number,
    slug: string,
    name: string
    background_image: string,
    released: string,
    playtime: number
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
        
        const urlGet = url + '?search=' + searchstring;
        const data = await axios.get(urlGet);

        console.log(urlGet);
        console.log('data', data);
        console.log('games', this.state.games);

        this.setState({
            games: data.data.results,
            nextGamesPost: data.data.next,
            gamesLength: this.state.games.length + data.data.results.length,
            showGameLoading: false
        });
    }

    public async loadGames(url: string) {
        this.setState({showGameLoading: true})
        const data = await axios.get(url);
        console.log('data', data);
        console.log('state games', this.state.games);

        this.setState({
            games: this.state.games.concat(data.data.results),
            nextGamesPost: data.data.next,
            gamesLength: this.state.games.length + data.data.results.length,
            showGameLoading: false
        });
    }

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
