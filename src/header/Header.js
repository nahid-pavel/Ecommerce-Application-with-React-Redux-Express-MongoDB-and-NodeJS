import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logOutAction } from '../auth/redux/Actions';
import { useDispatch } from 'react-redux';
import './header.css';


const Header = (
) => {
    const history = useHistory();
    const dispatch = useDispatch()

    const totalItems = useSelector(state => {
        return state?.localStorage?.cartItems.reduce((a, b) => a + b?.totalQty, 0)
    }, shallowEqual)

    const { profileData } = useSelector(
        (state) => state?.auth,
        shallowEqual
    );




    return (

        <Container>
            <div className="d-flex justify-content-between align-items-center  ">
                <div className="logo" onClick={() => history.push('/')}>
                    <h3>EShop</h3>
                </div>
                <div className="d-flex justify-content-between  align-items-center" >
                    <div className="mx-4" style={{ position: 'relative' }}><span style={{ cursor: 'pointer' }} onClick={
                        () => history.push('/cartItems')
                    }>
                        <div className="totalItems"><span>{totalItems}</span></div>
                        <i className="fas fa-shopping-cart"></i></span>Cart
                    </div>
                    {

                        profileData?.isAuth ? (


                            <NavDropdown title={profileData?.name.split('')[0].toUpperCase() + profileData?.name.slice(1,)} id='username'>

                                <NavDropdown.Item onClick={() => history.push('/profile')}>Profile</NavDropdown.Item>

                                <NavDropdown.Item onClick={() => {
                                    history.push("/");
                                    dispatch(logOutAction())
                                }}>
                                    Logout
                                    </NavDropdown.Item>
                            </NavDropdown>
                        ) : (

                                <Nav.Link>
                                    <span onClick={() => history.push('/login')}> <i className='fas fa-user'></i> Login</span>

                                </Nav.Link>

                            )




                    }

                </div>
            </div>

        </Container >




    )


}

export default Header;


