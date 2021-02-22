import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import { Col, Row, Image, ListGroup } from 'react-bootstrap';
import { setAddToCartActions } from '../../localStorageRedux/Actions';
import { useDispatch } from 'react-redux';
import Select from 'react-select';





export default function CartItems() {


    const dispatch = useDispatch();

    const items = useSelector(state => state?.localStorage?.cartItems, shallowEqual);





    return (
        <>
            {
                items?.length === 0 ?
                    (
                        <h1>No Items in the Basket.Please Select One</h1>
                    ) :

                    <ListGroup>
                        {items?.map(item => {
                            return (

                                <ListGroup.Item>
                                    <Row>
                                        <Col md={3}>
                                            <Image src={item?.image} alt={item?.name} fluid />
                                        </Col>
                                        <Col md={3}>
                                            {item?.price}
                                        </Col>
                                        <Col md={3}>
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
                                    </Row>
                                </ListGroup.Item>


                            )
                        })
                        }
                    </ListGroup>




            }


        </>
    )
}
