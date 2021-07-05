import React, { Component } from 'react'
import {BiMailSend, BiMap, BiPhoneCall} from 'react-icons/bi'

import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-description">
                    <h5>About Us</h5>
                    <p>Fashion Outlets Connects you with the trends...Fashion Outlets is a Indian Company, who provides All branded fasionable Clothes with best deals </p>
                </div>
                <div className="footer-link">
                    <h5>Categories</h5>
                    <ul>
                        <li><a href="">Plus Member</a></li>
                        <li><a href="">Delivery Partners</a></li>
                        <li><a href="">Pay letter Option</a></li>
                        <li><a href="">Supported payment Gatways</a></li>
                    </ul>
                </div>
                <div className="footer-contactUs">
                    <h5>Contact us</h5>
                     <p><span><BiMap /></span> Fashion Outlets HeadQueater,BTM LAYOUT, Bangaluru ,India , 560029</p>
                    <strong><span><BiPhoneCall/></span> +91-9876543210 </strong> <br/>
                    <strong><span><BiMailSend /></span>help@fashionoutlets.com</strong>
                </div>
            </div>
        )
    }
}

export default Footer