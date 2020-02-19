import React, { Component } from 'react';

type GameImageProps = {
    cssClass: string;
    src: string;
    alt: string;
}

class GameImage extends Component<GameImageProps, {}> {
    render() {
        let cssClass = this.props.cssClass;
        let src = this.props.src;
        let alt = this.props.alt;
        
        return <img className={cssClass} src={src} alt={alt}/>
    }
}

export default GameImage;
