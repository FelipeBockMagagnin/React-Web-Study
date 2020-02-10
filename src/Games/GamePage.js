import React, { Component } from 'react';
import axios from 'axios';
import GameImage from './GameImage';
import Loader from '../Loader';

class GamePage extends Component {
    constructor(props) {
        super(props);

        this.gameData(this.props.match.params.id);

        this.state = {
            gameData: [],
            showGameLoading: true
        };
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


                <div className="card-body" dangerouslySetInnerHTML={{__html: data.description}} >

                </div>
            </div>            
        );
    };

    async gameData(id) {
        this.setState({showGameLoading: true});
        const data = await axios.get("https://api.rawg.io/api/games/" + id);
        this.setState({ gameData: data.data, showGameLoading: false });
        console.log(data);
    }

}

export default GamePage;
