import { SET_CARDS }  from "./CardList.action";

const initialState = {
    cards : [
        {
            id : 1,
            img_src : 'https://i5.walmartimages.com/dfw/4ff9c6c9-875b/k2-_880a0145-75cc-4189-87f3-963d537f3b2e.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
            des : 'Electronics'
        },
        {
            id : 2,
            img_src : 'https://i5.walmartimages.com/dfw/4ff9c6c9-f3a2/k2-_9b318cf3-705b-4fdc-a85c-f0f9f6edfe6a.v1.png?odnWidth=282&odnHeight=282&odnBg=ffffff',
            des : 'Clothing'
        },
        {
            id : 3,
            img_src : 'https://i5.walmartimages.com/dfw/4ff9c6c9-1ae5/k2-_96e7d10b-1eba-4a6c-bb4f-1cf310aa66ab.v1.png?odnWidth=282&odnHeight=282&odnBg=ffffff',
            des : 'Gadgets'
        },
        {
            id : 4,
            img_src : 'https://i5.walmartimages.com/dfw/4ff9c6c9-edcd/k2-_b1a4c28c-d1fd-44c9-89fe-5a55a59b138f.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
            des : 'Scandals'
        },
        {
            id : 5,
            img_src : 'https://i5.walmartimages.com/dfw/4ff9c6c9-9087/k2-_eb031137-379f-4c58-90fd-8c66c2f5394a.v1.jpg?odnWidth=282&odnHeight=282&odnBg=ffffff',
            des : 'Leather'
        },
        {
            id : 6,
            img_src : 'https://i5.walmartimages.com/dfw/4ff9c6c9-d1cd/k2-_29fa3e75-1910-4966-84c7-f3e0d754e8b7.v1.png?odnWidth=282&odnHeight=282&odnBg=ffffff',
            des : 'Kitchen Applicances'
        }
    ]
}

export const cardsReducer = (state = initialState.cards, action) => {
    switch(action.type) {
        case SET_CARDS:
            return state;
        default:
            return state;
    }
}

export default cardsReducer