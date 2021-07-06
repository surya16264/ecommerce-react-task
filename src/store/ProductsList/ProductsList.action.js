import { ActionTypes } from "./ProductsList.dispatcher";

export const setProducts = (products) => {
    return{
        type : ActionTypes.SET_PRODUCTS,
        payload : products,
    };
};