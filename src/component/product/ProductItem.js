import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../../_helper/ItemCard';
import { getSingleProduct } from './helper';


export default function ProductItem() {
    const { id } = useParams();
    console.log('got id', id)

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (id) {
            console.log('heyyyyyyy')
            getSingleProduct(id, setProduct, setLoading)
        }

    }, [id])


    return (
        <>
            {loading && <h1>Loading...</h1>}
            {product?.image &&
                <div className="row">
                    <div className="col-md-4 mt-4">


                        <ItemCard name={product?.name} description={product?.description} imgSrc={product?.image} price={product?.price} />



                    </div>

                </div>}

        </>
    )
}
