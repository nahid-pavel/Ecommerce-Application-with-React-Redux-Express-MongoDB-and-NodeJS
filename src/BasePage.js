import React from 'react';
import Header from './header/Header';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, shallowEqual } from "react-redux";
import ProductPages from './component/product/ProductPages';
import CartItems from './component/cart/CartItems';
import Checkout from './component/checkout/Checkout';
import Login from './auth/login/Login';
import SignUp from './auth/signUp/SignUp';
import Profile from './component/profile/Profile';
import axios from 'axios';





const BasePage = () => {
    const [isOpenProfileSidebar, setIsOpenProfileSidebar] = React.useState(true);
    const { profileData } = useSelector(
        (state) => state?.auth,
        shallowEqual
    );


    return (
        <div className="main">
            <Router>
                <div className="header-wrapper">
                    <Header isOpenProfileSidebar={isOpenProfileSidebar} setIsOpenProfileSidebar={setIsOpenProfileSidebar} />
                </div>
                <Container className="body-inner">
                    <Switch>
                        <Route exact path="/" component={ProductPages} />
                        <Route path="/products" component={ProductPages} />
                        <Route path="/cartItems" component={CartItems} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/signup" component={SignUp} />
                        <Redirect to="/error" component={() => <h1>Error 404!</h1>} />

                    </Switch>

                </Container>

            </Router>


        </div>

    )

}

export default BasePage;