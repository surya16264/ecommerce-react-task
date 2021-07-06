import React, { Component } from 'react'
import ImageSlider from '../../components/imageSlider';
import CardProducts from '../../components/CardProducts';
import TrendingProducts from '../../components/CardProducts/card.container'

class Home extends Component {
    render() {
        return (
            <>
            <div className="App">
                <div className='slider-container'>
                    <ImageSlider />
                </div>
                <div className='cardsImg-container'>
                    <h1>Trending Products</h1>
                    <TrendingProducts />
                </div>
            </div>
            </>
        )
    }
}

export default Home