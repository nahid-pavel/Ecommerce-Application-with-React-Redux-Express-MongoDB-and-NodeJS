import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getSingleProduct } from './helper';
import { Image, ListGroup, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import Rating from '../../_helper/Rating';
import Loading from '../../_helper/Loading';

import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { setAddToCartActions } from '../../localStorageRedux/Actions';
import ProductReview from './ProductReview';
import SeeReviews from './SeeReviews';







export default function ProductItem() {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch()

    console.log(id, 'idssss')


    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [qty, setQty] = useState({ value: '1', label: '1' });
    const [qtyDDL, setQtyDDL] = useState([])






    useEffect(() => {
        if (id) {
            console.log('got id from useefect')

            getSingleProduct(id, setProduct, setLoading)
        } else {
            console.log('kuch to garbar hai')
        }

    }, [id])
    useEffect(() => {

        if (product?.countInStock) {
            setQtyDDL([
                ...Array(

                    product?.countInStock

                )
            ].map((v, i) => {

                return {
                    value: i + 1,
                    label: i + 1
                }
            })
            )
        }


    }, [product])




    return loading ? <Loading /> :
        <Container>


            <Button className="btn btn-light my-3" onClick={() => history.push('/')}>Go Back</Button>
            {product?.image &&
                <div className="row mt-4">
                    <div className="col-md-6 ">

                        <Image src={product?.image} alt={product?.name} fluid />

                    </div>
                    <div className="col-md-3">
                        <ListGroup variant="flush">
                            <ListGroup.Item><h2>{product?.name}</h2></ListGroup.Item>
                            <ListGroup.Item><Rating value={product?.value} text={product?.numReviews} color="red" /></ListGroup.Item>
                            <ListGroup.Item>Price: {product?.price}</ListGroup.Item>
                            <ListGroup.Item>Description: {product?.description}</ListGroup.Item>
                        </ListGroup>


                    </div>
                    <div className="col-md-3">
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <div className="row">
                                    <div className="col">
                                        Price:
                                    </div>
                                    <div className="col">
                                        {product?.price} Tk.
                                    </div>

                                </div>

                            </ListGroup.Item>


                            <ListGroup.Item>
                                <div className="row">
                                    <div className="col">
                                        Status:
                                        </div>
                                    <div className="col">
                                        {product?.countInStock > 0 ? 'In Stock' : 'Out of stock'}
                                    </div>

                                </div>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="row">
                                    <div className="col">
                                        Quantity:
                                        </div>
                                    <div className="col">
                                        <Select
                                            name="qty"
                                            value={qty}
                                            options={qtyDDL}
                                            onChange={(v) => setQty(v)}
                                            isDisabled={product?.countInStock === 0}



                                        />
                                    </div>

                                </div>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn btn-primary btn-block"

                                    type="button"
                                    disabled={product?.countInStock === 0}
                                    onClick={() => dispatch(setAddToCartActions({
                                        ...product,
                                        totalQty: +qty?.value
                                    }))}

                                >
                                    Add To Cart
                                </Button>

                            </ListGroup.Item>
                        </ListGroup>



                    </div>

                </div>}
            <Row style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
                <Col md={12}  >
                    <ProductReview  productId={id} />
                </Col>

            </Row>
            <Row>
                <Col md={6} className="mt-4" >
                    {product?.reviews?.length > 0 ? (<h3>All Reviews</h3>) : <Alert variant="danger">No Review Found</Alert>}
                    <SeeReviews reviews={product?.reviews} />
                </Col>
            </Row>


        </Container>

}
