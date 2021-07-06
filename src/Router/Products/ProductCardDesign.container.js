import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setProducts } from '../../store/ProductsList/ProductsList.action';
import ProductCardComponent from './ProductCardDesign.components';


import './ProductCardDesign.scss'

class ProductsCardContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className='plp-page'>
            <h1>Product Listing Page</h1>
            <div className='productCard-container'>
                <ProductCardComponent />
            </div>
            </div>
        );
    }
}



export default ProductsCardContainer