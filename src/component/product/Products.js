import React, { useState, useEffect } from 'react';
import { getAllProducts } from './helper';

import ItemCard from '../../_helper/ItemCard';
import Loading from '../../_helper/Loading';
import './product.css';
import Carousal from './Carousal';
import { Container } from 'react-bootstrap';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getAllProducts(setProducts, setLoading)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getAllProducts])



    return (
        <>
            



            {loading ? <Loading /> :
              
                (
                <>
                <Carousal products={products} />
                <Container>
                <div className="row">
                   

                    {
                        products?.map((itm, index) => (

                            <div  key={index} className="product-item col-md-4">
                                <ItemCard
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
                </Container>
                </>)
            }




        </>
    )


}

export default Products;