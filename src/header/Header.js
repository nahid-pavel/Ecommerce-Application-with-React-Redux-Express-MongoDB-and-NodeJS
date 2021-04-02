import React from 'react';
import { Container, Image, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';
import { logOutAction } from '../auth/redux/Actions';
import { useDispatch } from 'react-redux';
import {ListGroup,Col,Row} from 'react-bootstrap';

import './header.css';
import SearchBox from './SearchBox';
import { getSearchProductsActions } from '../component/product/_redux/Actions';


const Header = (
) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const [isEmpty,setIsEmpty] = React.useState(true)
    const [fieldValue,setFieldValue] = React.useState("")

    const totalItems = useSelector(state => {
        return state?.localStorage?.cartItems.reduce((a, b) => a + b?.totalQty, 0)
    }, shallowEqual)

    const { profileData } = useSelector(
        (state) => state?.auth,
        shallowEqual
    );

    const searchedProducts = useSelector(state=> state.product.searchedProducts)
    const paginationSearchHandler = (searchValue) => {
        dispatch(
            getSearchProductsActions(

                setLoading,
                null,
                null,
                searchValue
            )

        )

    }




    return (

        <Container>
            <div className="d-flex justify-content-between align-items-center  ">
                <div className="logo" onClick={() => history.push('/')}>
                    <h3>EShop</h3>
                </div>
                <div className="searchField">
                    <SearchBox placeholder="Enter product name" fieldValue={fieldValue} paginationSearchHandler={paginationSearchHandler} setIsEmpty={setIsEmpty} setFieldValue={setFieldValue}/>
                    {
                        loading ? (
                            <div className="searchResult"><p>Loading</p></div>

                        ):
                    
                        
                              searchedProducts?.length > 0 && isEmpty===false?
                              (
                                <div className="searchResult">
                                    <ListGroup className="list-search" >
                                        {
                                            searchedProducts?.map((item,index)=>{
                                               
                                                return(
                                                    <div  key={index}>
                                                        <ListGroup.Item onClick={()=>{
                                                            history.push(`/products/${item?._id}`);
                                                            setFieldValue("");
                                                            setIsEmpty(true)

                                                        }} id="list-item" >
                                                        <Row>
                                                            <Col md={3} >
                                                               <Image src={item?.image} alt={item?.name} fluid />
                                                            </Col>
                                                            <Row>
                                                            <Col md={12} style={{color:'blue'}}>
                                                               <p>{item?.name}</p>
                                                            </Col>
                                                           
                                                            <Col md={12} style={{color:'black'}}>
                                                              Price: {item?.price}
                                                            </Col>
                                                            </Row>
                                                           
                                                        </Row>
                                                    </ListGroup.Item>
    
                                                    </div>
                                                    
    
                                                )
                                            })
    
                                        }
                                    </ListGroup>
    
    
                                </div>
    
                            ): null

                        }

                  
                    
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


