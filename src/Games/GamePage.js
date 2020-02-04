import React, { Component } from 'react';
import axios from 'axios';
import GameItem from './GameItem';

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
                Game Name: {data.name};
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
