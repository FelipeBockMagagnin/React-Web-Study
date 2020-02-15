import React, { Component } from 'react';
import GameImage from './GameImage';
import Loader from '../Loader';
import { GameDetails } from '../Data/game';
import GamesProvider from '../Providers/GamesProvider';

type GamePageProps = {
    match: any
}

type GamePageState = {
    gameData: GameDetails
    showGameLoading: boolean
}

class GamePage extends Component<GamePageProps, GamePageState> {
    constructor(props) {
        super(props);

        this.state = {
            gameData: {} as any,
            showGameLoading: true
        };

        this.gameData(this.props.match.params.id)
    }

    render() {
        const data = this.state.gameData;
        return (
            <div className="card shadow-card container page-card">
                {
                    this.state.showGameLoading ? <Loader/> : null
                }
                <div className="form-row card-header">
                    <div className="col-md-6" >
                        <GameImage cssClass="image" src={data.background_image} alt="game image"/>
                    </div>

                    <div className="col-md-6">
                        <h1>{data.name}</h1>
                        <p>Release: {data.released}</p>
                        <p>Average Gameplay time: <b>{data.playtime}</b> hours</p>
                        <div className="form-row">
                            <div className="col-md-4">
                                <p className="mb-0">Main Story</p>
                                <p>???</p>  
                            </div>

                            <div className="col-md-4">
                                <p className="mb-0">Main + Extras</p>
                                <p>???</p>
                            </div>

                            <div className="col-md-4">
                                <p className="mb-0">Completionist</p>
                                <p>???</p>
                            </div>
                        </div>

                    </div>
                    <button className="add-game-button" onClick={() => alert('Not implemented, add game to user database')}><i className="fas fa-plus"></i></button>

                </div>
                
                <div className='card-body'>
                    {
                        data.developers != null 
                        ? data.developers.map(developer => 
                                <div key={developer.id}>{developer.name} 
                                <GameImage cssClass="image-tag" src={developer.image_background} alt="game image"/></div>
                            )
                        : '' 
                    }

                    <br></br>

                    {
                        data.genres != null 
                            ? data.genres.map(genre => 
                                <div key={genre.id}>{genre.name} 
                                <GameImage cssClass="image-tag" src={genre.image_background} alt="game image"/></div>
                            ) 
                            : ''
                    }
                    
                    <div dangerouslySetInnerHTML={{__html: data.description}}></div>
                </div>
            </div>            
        );
    };

    async gameData(id: number) {
        this.setState({showGameLoading: true});
        const data = await new GamesProvider().GetGameById(id);
        console.log('game page' ,data);
        this.setState({ showGameLoading: false, gameData: data });
    }

}

export default GamePage;
