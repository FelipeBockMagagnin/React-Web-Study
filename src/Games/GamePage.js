import React, { Component } from 'react';
import axios from 'axios';
import GameImage from './GameImage';

class GamePage extends Component {
    constructor(props) {
        super(props);

        this.gameData(this.props.match.params.id);

        this.state = {
            gameData: [],
        };
    }

    render() {
        const data = this.state.gameData;
        return (
            <div className="card shadow-card container page-card">
                <div className="form-row card-header">
                    <div className="col-md-6" >
                        <GameImage cssClass="image" src={data.background_image} alt="game image"/>
                    </div>

                    <div className="col-md-5">
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
                </div>

                <button className="add-float-button"><i className="fas fa-plus"></i></button>
                <button className="add-game-button"><i className="fas fa-plus"></i></button>

                <div className="card-body" dangerouslySetInnerHTML={{__html: data.description}} >

                </div>
            </div>            
        );
    };

    async gameData(id) {
        const data = await axios.get("https://api.rawg.io/api/games/" + id);
        console.log(data);
        this.setState({ gameData: data.data })
    }

}

export default GamePage;
