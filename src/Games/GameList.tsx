import React, { Component } from 'react';
import GameItem from './GameItem';
import Loader from '../Loader';
import {Game} from '../Data/game'
import GamesProvider from '../Providers/GamesProvider';

type gameListState = {
    games: Array<Game>,
    nextGamesPost: string,
    gamesLength: number,
    showGameLoading: boolean,
    loadingPage: boolean
}

class GameList extends Component<{}, gameListState>{    
    constructor(props: any) {
        super(props);

        this.state = {
            games: [],
            nextGamesPost: '',
            gamesLength: 0,
            showGameLoading: true,
            loadingPage: true
        };
    };    

    componentDidMount() {
        this.setState({loadingPage: true});
        this.loadGames('https://api.rawg.io/api/games');
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    public searchGames = (event: any) =>{
        this.loadGamesSearch('https://api.rawg.io/api/games', event.target.value);
    }

    render() {
        if(this.state.loadingPage){
            console.log('loading page');
            return <Loader></Loader>
        }

        return (
            <div className="game-list-panel">
                <div className='col-md-6'>
                    <input className="form-control" placeholder="search" onChange={this.searchGames}></input>
                </div>
                {this.state.games.map(game =>
                    <GameItem key={game.id} data={game} />
                )}

                { this.state.showGameLoading ? <Loader/> : null }
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

        new GamesProvider().GetGamesSearch(url, searchstring).then(data => {
            console.log('data', data);
            console.log('games', this.state.games);   

            this.setState({
                games: data.results,
                nextGamesPost: data.next,
                gamesLength: this.state.games.length + data.results.length,
                showGameLoading: false,
            });
        });        
    }

    public async loadGames(url: string) {
        this.setState({
            showGameLoading: true
        });
        
        new GamesProvider().GetGames(url).then(data =>{
            console.log('data', data);
            console.log('state games', this.state.games);   
    
            if(data.results === undefined){
                console.log('page loading error', data);
                return;
            }

            if(this.state.loadingPage){
                this.setState({loadingPage: false});
            }

            this.setState({
                games: this.state.games.concat(data.results),
                nextGamesPost: data.next,
                showGameLoading: false
            });
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
