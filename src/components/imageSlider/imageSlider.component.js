import React, { Component } from 'react';
import imageData from './imageData';
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import Dots from './imageSlider.container';
import './imageSlider.scss'


class ImageSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderIndex : 0,
            arrow : 'right'
        }
    }

    nextSlide() {
        this.setState({
            sliderIndex : this.state.sliderIndex === imageData.length-1 ? 0 : this.state.sliderIndex + 1,
            arrow : 'right'
        });
    }

    prevSlide() {
        this.setState({
            sliderIndex : this.state.sliderIndex === 0 ? imageData.length-1 : this.state.sliderIndex - 1,
            arrow : 'left'
        });
    }

    componentDidMount() {
        this.timer = setInterval(() => this.autoplay(),3000)
    }

    autoplay() {
        if(this.state.arrow === 'left') {
            this.setState({
                sliderIndex : this.state.sliderIndex === 0 ? imageData.length-1 : this.state.sliderIndex - 1
            })
        }
        else {
            this.setState({
                sliderIndex : this.state.sliderIndex === imageData.length-1 ? 0 : this.state.sliderIndex + 1
            })
        }
    }
    
    render() { 
        const slider = imageData.map((data, index) => {
            return(
                <>
                    <div className={index === this.state.sliderIndex ? 'slider active' : 'slider'} key={ index }>
                        <img src={data.img_src} className='image' alt=''/>
                    </div>
                </>
            );
        })
        return(
            <>
            <div className='imageSlider-container'>
                <BiChevronLeft className='left-arrow' onClick={() => this.prevSlide()}/>
                <BiChevronRight className='right-arrow' onClick={() => this.nextSlide()}/>
                {slider}
            </div>
            <div className='dots-container'>
                <Dots sliderIndex={this.state.sliderIndex } />
            </div>
            </>
        );
    }
}
 
export default ImageSlider;