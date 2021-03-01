import React from 'react';
import { Col, Nav, Row, ListGroup, Image, Button } from 'react-bootstrap';
import { useSelector, shallowEqual } from "react-redux";
import { numberFormatTwoDecimal } from '../../../../utils/NumberFormatTwoDecimal';
import { useHistory } from 'react-router-dom';
import { orderCreate } from './actions';


export default function Placeorder({ setCurrentStep }) {

    const items = useSelector(state => state?.localStorage?.cartItems, shallowEqual);
    const { shippingInfo, paymentMethod } = useSelector(state => state?.localStorage, shallowEqual);
    const { loading, setLoading } = React.useState(false);
    const history = useHistory();

    console.log('items', items)
    const totalPrice = items?.reduce((a, b) => a + b?.totalQty * b?.price, 0)
    const shippingPrice = totalPrice > 1000 ? 0 : 100;
    const tax = (0.15 * totalPrice);
    const amount = totalPrice + shippingPrice + tax;
    const [order, setOrder] = React.useState("");


    const placeOrderHandler = () => {
        const payload = {
            orderItems: items?.map(item => {
                return {
                    ...item,
                    name: item?.name,
                    qty: item?.totalQty,
                    image: item?.image,
                    price: item?.price,
                    product: item?._id





                }
            }),
            shippingAddress: {
                ...shippingInfo, country: shippingInfo.country.label
            },
            paymentMethod: paymentMethod,
            itemsPrice: totalPrice,
            taxPrice: tax,
            shippingPrice: shippingPrice,
            totalPrice: amount
        }

        orderCreate(payload, setOrder, history)

    }


    return (
        <>
            <Nav className="justify-content-center mb-4">
                <Nav.Item>
                    <Nav.Link style={{ color: 'green' }} onClick={() => setCurrentStep("one")}>Shipping</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{ color: 'green' }} onClick={() => setCurrentStep("two")}>Payment</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{ color: 'green' }} onClick={() => setCurrentStep("three")}>Placeorder </Nav.Link>
                </Nav.Item>
            </Nav>

            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p><strong> Address : {shippingInfo?.address}</strong></p>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method:</h2>
                            <strong>Method: {paymentMethod}</strong>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items</h2>


                        </ListGroup.Item>
                        <ListGroup.Item>
                            <ListGroup variant="flush">
                                {items?.map((item, index) => ((

                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image src={item?.image} alt={item?.name} fluid roundedCircle />
                                            </Col>
                                            <Col>
                                                {item?.name}

                                            </Col>
                                            <Col md={4}>
                                                {item?.price} * {item?.totalQty} = {numberFormatTwoDecimal(totalPrice)} Tk.

                                                </Col>



                                        </Row>

                                    </ListGroup.Item>
                                )))
                                }


                            </ListGroup>


                        </ListGroup.Item>

                    </ListGroup>


                </Col>
                <Col md={4}>

                    <ListGroup>
                        <ListGroup.Item>
                            <h2>Order Summary</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Items:
                                    </Col>
                                <Col>
                                    {totalPrice} Tk.
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Shipping:
                                    </Col>
                                <Col>
                                    {numberFormatTwoDecimal(shippingPrice)} Tk.
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Tax:
                                    </Col>
                                <Col>
                                    {numberFormatTwoDecimal(tax)} Tk.
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <strong>Total:</strong>
                                </Col>
                                <Col>
                                    <strong>{numberFormatTwoDecimal(amount)} Tk.</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn btn-block btn-dark" onClick={() => placeOrderHandler()}>Place Order</Button>
                        </ListGroup.Item>
                    </ListGroup>

                </Col>
            </Row>


        </>
    )
}
