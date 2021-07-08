import { setCards } from "./CardList.action"

/**
 * Dispatcher method 
 */
export class CardListDispatcher {
    dispatchCardList(dispatch) {
       dispatch(setCards())
    }
}

export default new CardListDispatcher() 
