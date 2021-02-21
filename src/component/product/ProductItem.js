import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ItemCard from '../../_helper/ItemCard';
import { getSingleProduct } from './helper';
import { Image, ListGroup, Button } from 'react-bootstrap';
import Rating from '../../_helper/Rating';
import Loading from '../../_helper/Loading';



export default function ProductItem() {
    const { id } = useParams();
    const history = useHistory();


    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (id) {

            getSingleProduct(id, setProduct, setLoading)
        }

    }, [id])


    return (
        <>
            {loading && <Loading />}
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
                                <Button className="btn btn-primary btn-block"

                                    type="button"
                                    disabled={product?.countInStock === 0}>
                                    Add To Cart
                                </Button>

                            </ListGroup.Item>
                        </ListGroup>



                    </div>

                </div>}

        </>
    )
}
