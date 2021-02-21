import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductItem from './ProductItem';
import Products from './Products';



export default function ProductPages() {
    return (
        <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/products/:id" component={ProductItem} />

            {/* <Redirect to="/error" /> */}
        </Switch>
    )
}
