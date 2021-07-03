import React, { Component } from 'react'
import ImageSlider from '../../components/imageSlider';

class Home extends Component {
    render() {
        return (
            <>
            <div className="App">
                <div className='slider-container'>
                    <ImageSlider />
                </div>
            </div>
            </>
        )
    }
}

export default Home