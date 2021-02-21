import React, { useState, useEffect } from 'react';
import { getAllProducts } from './helper';
import { useHistory } from 'react-router-dom'
import ItemCard from '../../_helper/ItemCard';
import Loading from '../../_helper/Loading';
import './product.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getAllProducts(setProducts, setLoading)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getAllProducts])



    return (
        <>
            <div className="my-3">
                <h1> Latest Products</h1>
            </div>

            {loading && <Loading />}
            <div className="row">

                {
                    products?.map((itm, index) => (

                        <div className="product-item col-md-4">
                            <ItemCard key={itm?.index}
                                link={`/products/${itm?._id}`}
                                name={itm?.name}
                                description={itm?.description}
                                imgSrc={itm?.image}
                                price={itm?.price}
                                rating={{
                                    value: itm?.rating,
                                    text: itm?.numReviews,
                                    color: 'red'



                                }}
                            />
                        </div>




                    ))

                }

            </div>


        </>
    )


}

export default Products;