import React, { Component } from 'react';
import ProductCardData from './ProductCardData'
import {FaRegHeart} from 'react-icons/fa';
import './ProductCardDesign.scss'

class ProductCardComponent extends Component {
    render() { 
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
        return cards
    }
}
 
export default ProductCardComponent;