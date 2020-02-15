import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameImage from './GameImage';
import {Game} from '../Data/game';

type GameItemProps = {
    data: Game
}

class GameItem extends Component<GameItemProps, {}>{

    render() {
        let data: Game = this.props.data;

        return <Link to={'game/' + data.slug}>
            <div className="card card-list">
                <GameImage cssClass="card-img-top" src={data.background_image} alt="game image" />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">Released: {data.released}-Playtime: <b>{data.playtime}</b></p>
                </div>
            </div>
        </Link>;
    }
}

export default GameItem;
