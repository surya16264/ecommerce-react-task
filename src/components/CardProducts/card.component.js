import React, { Component } from 'react'
import './card.scss'

export class CardProducts extends Component {
    constructor(props) {
        super(props)
    }
    render() { 
        const { cardsData } = this.props 
        console.log(cardsData)
        const cards = cardsData.map((card, index) => {
            return(
                <div className='cards' key={index}>
                    <img src={card.img_src} alt='' className='cardImg'/>
                    <p>{card.des}</p>
                </div>
            );
        });
        return(
            cards
        );
    }
}
 
export default CardProducts;










// const CardProducts = () => {
//     const products = useSelector((state) => state.allProducts.products);
//     const {id, img_src, des} = products;
//     const cards = products.map((card, index) => {
//         console.log(card)
//         return(
//             // <div className='cards' key={index}>
//             //     <img src={img_src} alt='' className='cardImg'/>
//             //     <p>{des}</p>
//             // </div>
//             <div><h1>Products rendered</h1></div>
//         );
//     });
// }

// export default CardProducts;