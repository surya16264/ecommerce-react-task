import { setProducts } from "./ProductsList.action"

/**
 * Dispatcher method
 */
export class ProductListDispatcher {
    dispatchProductList(dispatch) {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            dispatch(setProducts(data))
        })
    }
}

export default new ProductListDispatcher()





