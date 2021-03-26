import React from 'react';
import Header from './header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductPages from './component/product/ProductPages';
import CartItems from './component/cart/CartItems';
import Checkout from './component/checkout/Checkout';
import Login from './auth/login/Login';
import SignUp from './auth/signUp/SignUp';
import Profile from './component/profile/Profile';
import AdminPages from './component/admin/AdminPages';




import Order from './component/checkout/checkoutSteps/order/Order';
import { Container } from 'react-bootstrap';






const BasePage = () => {
    const [isOpenProfileSidebar, setIsOpenProfileSidebar] = React.useState(true);



    return (
        <div className="main">
            <Router>

                <Switch>

                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route path="/admin" component={AdminPages} />



                    <div>

                        <div className="header-wrapper">
                            <Header isOpenProfileSidebar={isOpenProfileSidebar} setIsOpenProfileSidebar={setIsOpenProfileSidebar} />
                        </div>
                       


                        <Route exact path="/" component={ProductPages} />
                        <Route path="/products" component={ProductPages} />
                        <Container style={{ marginTop: '35px' }}>
                            <Route path="/cartItems" component={CartItems} />
                            <Route path="/checkout" component={Checkout} />
                            <Route path="/order/:id" component={Order} />

                            <Route path="/profile" component={Profile} />
                            
                        </Container>




                    </div>


                </Switch>



            </Router>


        </div>

    )

}

export default BasePage;