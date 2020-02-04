import React, { Component } from 'react';

class GameItem extends Component {

    render() {
        let data = this.props.data;
        
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Released: {data.released} - Playtime: <b>{data.playtime}</b></p>
            </div>                       
        </div>;
    }
}

export default GameItem;
