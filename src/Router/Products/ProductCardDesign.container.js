import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProducts } from '../../store/ProductsList/ProductsList.action';
import ProductCardComponent from './ProductCardDesign.components';
import   ProductListDispatcher  from '../../store/ProductsList/ProductsList.dispatcher';

import './ProductCardDesign.scss'

class ProductsCardContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ProductsData : this.props.ProductsData.Products
        }
        debugger
        this.props.setProductsdata()
    }
    render() {
        return(
           <>
           <ProductCardComponent productsData = {this.props.ProductsData}/>
           </>
        );
    }
}

export const stateToProps = (state) => ({
    ProductsData : state
})

export const matchDispatchToProps = (dispatch) => ({
     setProductsdata : () => ProductListDispatcher.dispatchProductList(dispatch)
})

export default connect(stateToProps, matchDispatchToProps)(ProductsCardContainer)