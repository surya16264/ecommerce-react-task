import React, { Component } from 'react';
import imageData from './imageData';

class Dots extends Component {
    constructor(props) {
        super(props)
    }

    render() { 
        const { sliderIndex } = this.props
        const dots = imageData.map((dot, index) => {
            return <span className={index === sliderIndex ? 'dots active' : 'dots' } ></span>
        })
        return dots;
    }
}
 
export default Dots;

