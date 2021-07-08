import { SET_PRODUCTS } from ".";
const initialState = {
    products : [],
    isLoad : false
}
export const productsReducer = (state = initialState.products, {type, payload}) => {
    console.log("Reducer", payload)
    switch(type) {
        case SET_PRODUCTS:
            return {...state, products : payload};
        default:
            return state;
    }
}

export default productsReducer