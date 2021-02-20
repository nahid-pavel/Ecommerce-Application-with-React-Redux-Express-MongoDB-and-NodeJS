import React from 'react';
import { Container } from 'react-bootstrap';
import './header.css';


const Header = () => {
    return (

        <Container>
            <div className="d-flex justify-content-between align-items-center  ">
                <div className="logo">
                    <h3>EShop</h3>
                </div>
                <div className="d-flex justify-content-between">
                    <div><i class="fas fa-shopping-cart mr-3">Cart</i></div>
                    <div><i class="fas fa-user px-3">SignIn</i></div>
                </div>
            </div>

        </Container>




    )


}

export default Header;


