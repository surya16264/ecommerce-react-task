export const SET_PRODUCTS = 'SET_PRODUCTS';

/**
 * 
 * @param {*} products 
 * @returns 
 */
export const setProducts = (products) => ({
        type : SET_PRODUCTS,
        payload : products,
});

