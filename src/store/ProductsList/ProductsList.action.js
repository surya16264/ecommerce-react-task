export const SET_PRODUCTS = 'SET_PRODUCTS';

/**
 * 
 * @param {*} products 
 * @returns 
 */
export const setProducts = (products) => {
        console.log("Action", products)
        return{
        type : SET_PRODUCTS,
        payload : products,
        }
};

