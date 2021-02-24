import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import { Col, Row, Image, ListGroup, Button } from 'react-bootstrap';
import { setAddToCartActions, removeAddToCartActions } from '../../localStorageRedux/Actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import Select from 'react-select';
import Delete from '../../_helper/Delete';
import IConfirmModal from '../../_helper/ConfirmModal';






export default function CartItems() {


    const dispatch = useDispatch();
    const history = useHistory();

    const items = useSelector(state => state?.localStorage?.cartItems, shallowEqual);
    const isAuth = useSelector(state => state?.auth?.profileData?.isAuth, shallowEqual);
    console.log(isAuth, 'isAuth')
    const totalItems = items?.reduce((a, b) => a + b?.totalQty, 0)
    const totalPrice = items?.reduce((a, b) => a + b?.totalQty * b?.price, 0)





    return (
        <div className="my-3">

            {
                items?.length === 0 ?
                    (<>
                        <h3 style={{ color: 'red' }} className="text-center">No Items in the Basket.Please Select One.</h3>
                        <Button className="btn btn-light" onClick={() => history.push('/')}>Go Back</Button>
                    </>
                    ) :
                    <>
                        <h2 className="text-center">Your Items on Cart</h2>
                        <ListGroup>
                            {items?.map(item => {
                                return (
                                    <>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    <Image src={item?.image} alt={item?.name} fluid />
                                                </Col>
                                                <Col className="text-center py-3" >
                                                    {item?.price} Tk.
                                                </Col>
                                                <Col className="py-3" >
                                                    {item?.name}
                                                </Col>
                                                <Col className="py-3">
                                                    <Select
                                                        name="qty"
                                                        value={{ value: item?.totalQty, label: item?.totalQty }}
                                                        options={[
                                                            ...Array(

                                                                item?.countInStock

                                                            )
                                                        ].map((v, i) => {

                                                            return {
                                                                value: i + 1,
                                                                label: i + 1
                                                            }
                                                        })}
                                                        onChange={(v) => dispatch(setAddToCartActions({
                                                            ...item,
                                                            totalQty: +v?.value
                                                        }))}




                                                    />

                                                </Col>
                                                <Col className="text-center py-3" onClick={() =>
                                                    IConfirmModal({

                                                        message: "Do you want this item?",
                                                        yes: "Yes",
                                                        no: "No",
                                                        yesAlertFunc: function () {
                                                            dispatch(removeAddToCartActions(item))

                                                            return "";
                                                        },
                                                        noAlertFunc: function () {
                                                            return "";
                                                        },
                                                    })
                                                }>
                                                    <Delete />
                                                </Col>
                                            </Row>


                                        </ListGroup.Item>

                                    </>


                                )
                            })
                            }
                        </ListGroup>
                        <Row className="my-3">
                            <Col md={3}>
                                <h4 style={{ color: 'green' }}>Total Price:</h4>
                            </Col>
                            <Col md={2}>
                                <h4>{totalPrice} Tk.</h4>
                            </Col>
                            <Col md={3}>
                                <h4 style={{ color: 'green' }}>Total Quantity:</h4>
                            </Col>
                            <Col md={2}>
                                <h4>{totalItems}</h4>
                            </Col>


                        </Row>
                        <Row>
                            <Col md={12} className="text-right mr-3">
                                <Button className="bg bg-dark py-3 my-4" onClick={() => isAuth ? history.push('/checkout') : history.push({
                                    pathname: '/login',
                                    state: {
                                        link: '/checkout'
                                    }
                                })}>
                                    Check Out
                                </Button>
                            </Col>
                        </Row>
                    </>




            }


        </div>
    )
}
