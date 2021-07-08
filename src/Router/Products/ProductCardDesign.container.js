import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProducts } from '../../store/ProductsList/ProductsList.action';
import ProductCardComponent from './ProductCardDesign.components';
import   ProductListDispatcher  from '../../store/ProductsList/ProductsList.dispatcher';

import './ProductCardDesign.scss'

class ProductsCardContainer extends Component {
    constructor(props) {
        super(props)
        this.props.setProductsdata()
    }

    componentDidUpdate(prevState, prevProps) {
        console.log("Container", this.props)
    }

    render() {
        return(
           <>
           <ProductCardComponent productsData = {this.props.ProductsData.Products.products}/>
           </>
        );
    }
}

/**
 * 
 * @param {*} state 
 * @returns 
 */
export const stateToProps = (state) => ({
    ProductsData : state
})

/**
 * 
 * @param {*} dispatch 
 * @returns 
 */
export const matchDispatchToProps = (dispatch) => ({
     setProductsdata : () => ProductListDispatcher.dispatchProductList(dispatch)
})

export default connect(stateToProps, matchDispatchToProps)(ProductsCardContainer)