import { ActionTypes } from "./ProductsList.dispatcher";

const initialState = {
    products : []
}
export const productsReducer = (state = initialState.products, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products : payload};
        default:
            return state;
    }
}