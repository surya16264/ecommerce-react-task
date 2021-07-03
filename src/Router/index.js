import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './Home'
import Products from  './Products'

class AppRouter extends Component {
    render() {
        return (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} />
            </Switch>
        );
      }
}

export default AppRouter;