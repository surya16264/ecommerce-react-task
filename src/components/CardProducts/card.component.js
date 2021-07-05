import React, { Component } from 'react'
import cardData from './cardData';
import './card.scss'
class CardProducts extends Component {
    
    render() { 
        const cards = cardData.map((card, index) => {
            return(
                <div className='cards' key={index}>
                    <img src={card.img_src} alt='' className='cardImg'/>
                    <p>{card.des}</p>
                </div>
            );
        });
        return(
            <div className='cards-container'>
                {cards}
            </div>
        );
    }
}
 
export default CardProducts;