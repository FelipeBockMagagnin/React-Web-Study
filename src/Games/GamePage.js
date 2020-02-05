import React, { Component } from 'react';
import axios from 'axios';
import GameItem from './GameItem';
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
            <div>
                <GameImage cssClass="image" src={data.background_image} alt="game image"/>
                <h1>{data.name}</h1>
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
