import { ActionTypes } from "./CardList.dispatcher";

export const setCards = (products) => {
    return{
        type : ActionTypes.SET_CARDS,
        payload : products,
    };
};

