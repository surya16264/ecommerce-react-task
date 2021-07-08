import React, { Component }from 'react';
import { connect } from 'react-redux';
import CardProducts from ".";
import { CardListDispatcher } from '../../store/CardList';

class TrendingProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardsData : this.props.cardsData.Cards
        }
    }
    render() {
        return (  
            <div className='cards-container'>
                <CardProducts cardsData={this.state.cardsData}/>
            </div>
        );
    }    
}

const stateToProps = (state) => {
    return {
        cardsData : state
    }
}

const matchDispacthToProps = (dispatch) => ({
    setCardsdata : () => CardListDispatcher.dispatchCardList(dispatch)
})

   
export default connect(stateToProps, matchDispacthToProps)(TrendingProducts);