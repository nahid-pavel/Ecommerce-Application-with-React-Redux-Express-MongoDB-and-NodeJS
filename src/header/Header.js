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
                <div className="d-flex justify-content-between  align-items-center">
                    <div className="mr-2"><span style={{ cursor: 'pointer' }}><i class="fas fa-user mx-1"></i></span>Cart</div>
                    <div><span style={{ cursor: 'pointer' }}><i class="fas fa-user mx-1"></i></span>SignIn</div>
                </div>
            </div>

        </Container>




    )


}

export default Header;


