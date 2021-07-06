import React, { Component } from 'react'

import './pdp.scss'

/**
 * Class for  Product Description Page
 */
export class PDP extends Component {
    render () {
        return (
            <div className="app">
                <div className="details">
                  <div className="big-img">
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13061458/2020/11/23/0e0ecdd2-1c5e-492a-830a-44fc15be5f321606128315204-Cole-Haan-Women-White-Sneakers-8901606128313972-1.jpg" alt=""/>
                  </div>
    
                  <div className="box">
                    <div className="row">
                      <h2>Nike Shose</h2>
                      <span>₹ 5999</span>
                    </div>
    
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolore assumenda quod necessitatibus expedita animi.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nulla harum debitis sunt numquam nisi labore, quos aliquam quas, perferendis mollitia laboriosam dolorem esse voluptatum consequatur nemo nam aspernatur! Accusamus?</p>

                    <button className="cart">Add to cart</button>
    
                  </div>
                </div>
          </div>
        )
    }
}

export default PDP;

