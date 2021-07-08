import { setCards } from "./CardList.action"

export class CardListDispatcher {
    dispatchCardList(dispatch) {
        debugger
       dispatch(setCards())
    }
}

export default new CardListDispatcher() 
