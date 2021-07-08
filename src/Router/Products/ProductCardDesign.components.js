import React, { Component } from 'react';
import ProductCardData from './ProductCardData'
import {FaRegHeart} from 'react-icons/fa';
import './ProductCardDesign.scss'

class ProductCardComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        const { productsData } = this.props
        const cards = ProductCardData.map((card, index) => {
            return(
                <div className='productCard' key={index}>
                    <div className='heartIcon'> <span> <FaRegHeart/> </span> </div>
                    <img src={card.img_src} className='productImage' alt=''/>
                    <div className='productDescription'> <a href='#'> <p>{card.des}</p> </a> </div>
                    <div className='productPrice'> 
                        <p> 
                            <span>$</span> {card.min_price} 
                            <span> - </span>
                            <span>$</span> {card.max_price} 
                        </p> 
                    </div>
                    <div className='buynow'> <button className='buynowbtn'>BUY NOW</button> </div>
                </div>
            )
        });
        return(
            <div className='plp-page'>
            <h1>Product Listing Page</h1>
            <div className='productCard-container'>
                {cards}
            </div>
            </div>
        );
    }
}
 
export default ProductCardComponent;