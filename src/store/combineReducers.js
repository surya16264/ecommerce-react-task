import { combineReducers } from "redux";
import { cardsReducer } from "./CardList/CardList.reducer";
import { productsReducer } from "./ProductsList/ProductsList.reducer";

/**
 * Reducers method
 */
export const reducers = combineReducers({
    Cards : cardsReducer,
    Products : productsReducer,
})