import { setProducts } from "./ProductsList.action"


export class ProductListDispatcher {
    dispatchProductList(dispatch) {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch(setProducts(data))
        })
    }
}

export default new ProductListDispatcher()





