import React, { Component } from 'react';

class GameImage extends Component {

    render() {
        let cssClass = this.props.cssClass;
        let src = this.props.src;
        let alt = this.props.alt;

        
        return <img className={cssClass} src={src} alt={alt}/>
    }
}

export default GameImage;
