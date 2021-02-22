import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';




import './header.css';


const Header = () => {
    const history = useHistory();

    const totalItems = useSelector(state => {
        return state?.localStorage?.cartItems.reduce((a, b) => a + b?.totalQty, 0)
    }, shallowEqual)

    console.log(totalItems, 'cartitems')



    return (

        <Container>
            <div className="d-flex justify-content-between align-items-center  ">
                <div className="logo">
                    <h3>EShop</h3>
                </div>
                <div className="d-flex justify-content-between  align-items-center" >
                    <div className="mx-4" style={{ position: 'relative' }}><span style={{ cursor: 'pointer' }} onClick={
                        () => history.push('/cartItems')
                    }>
                        <div className="totalItems"><span>{totalItems}</span></div>
                        <i class="fas fa-shopping-cart"></i></span>Cart
                    </div>
                    <div><span style={{ cursor: 'pointer' }}><i class="fas fa-user  mx-1"></i></span>SignIn</div>
                </div>
            </div>

        </Container>




    )


}

export default Header;


