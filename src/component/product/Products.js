import React, { useState, useEffect } from 'react';
import { getAllProducts } from './helper';
import { useHistory } from 'react-router-dom'
import ItemCard from '../../_helper/ItemCard';

import './product.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getAllProducts(setProducts, setLoading)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getAllProducts])

    console.log('products', products)

    return (
        <>
            <h1> Lastest Products</h1>
            {loading && <h2>Loading....</h2>}
            <div className="row">

                {
                    products?.map((itm, index) => (

                        <div className="col-md-4">
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