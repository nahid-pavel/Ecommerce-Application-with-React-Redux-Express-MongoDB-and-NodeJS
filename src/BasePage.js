import React from 'react';
import Header from './header/Header';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ProductPages from './component/product/ProductPages';
import CartItems from './component/cart/CartItems';



const BasePage = () => {

    return (
        <div className="main">
            <Router>
                <div className="header-wrapper">
                    <Header />
                </div>
                <Container className="body-inner">
                    <Switch>
                        <Route exact path="/" component={ProductPages} />
                        <Route path="/products" component={ProductPages} />
                        <Route path="/cartItems" component={CartItems} />
                        <Route path="/error" component={() => <h1>Error 404!</h1>} />
                        {/* <Redirect to="/error" /> */}
                    </Switch>

                </Container>

            </Router>


        </div>

    )

}

export default BasePage;