import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCardComponent from './ProductCardDesign.components';
import   ProductListDispatcher  from '../../store/ProductsList/ProductsList.dispatcher';

import './ProductCardDesign.scss'

class ProductsCardContainer extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            data : null
        }
        this.props.setProductsdata()
    }

    render() {
     
        const { ProductsData } = this.props
        if(ProductsData.length == 0) {
            return <p style={{"margin-top" : "8rem" }}>Loading...</p>
        }
        return(
           
           <ProductCardComponent productsData = {ProductsData}/>
           
        );
    }
}

/**
 * 
 * @param {*} state 
 * @returns 
 */
export const stateToProps = (state) => {
    console.log("state",state);
    return {ProductsData : state.Products}
}

/**
 * 
 * @param {*} dispatch 
 * @returns 
 */
export const matchDispatchToProps = (dispatch) => ({
    setProductsdata : () => ProductListDispatcher.dispatchProductList(dispatch)
})

export default connect(stateToProps, matchDispatchToProps)(ProductsCardContainer)