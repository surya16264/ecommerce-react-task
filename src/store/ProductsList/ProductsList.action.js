export const SET_PRODUCTS = 'SET_PRODUCTS';


export const setProducts = (products) => {
    console.log(products)
    return{
        type : SET_PRODUCTS,
        payload : products,
    };
};

