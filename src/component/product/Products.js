import React, { useState, useEffect } from 'react';
import { getAllProducts } from './helper';

import ItemCard from '../../_helper/ItemCard';
import Loading from '../../_helper/Loading';
import './product.css';
import Carousal from './Carousal';
import { Container } from 'react-bootstrap';
import PaginationTable from '../../_helper/_tablePagination';

const Products = () => {
    const [products, setProducts] = useState("");
    const [loading, setLoading] = useState(true);
    const [pageNo, setPageNo] = useState(0)
    const [pageSize, setPageSize] = useState(15)
    const setPositionHandler = (pageNo, pageSize) => {
        getAllProducts(
            setProducts,
            setLoading,
            pageNo,
            pageSize
        )

    }



    useEffect(() => {
        getAllProducts(setProducts, setLoading)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [getAllProducts])



    return (
        <>




            {loading ? <Loading /> :

                (
                    <>
                        <Carousal products={products?.products} />
                        <Container>
                            <div className="row">


                                {
                                    products?.products?.map((itm, index) => (

                                        <div key={index} className="product-item col-md-4">
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
                            {
                                products?.products?.length > 0 && (
                                    <PaginationTable
                                        count={products?.totalCount}
                                        setPositionHandler={setPositionHandler}
                                        paginationState={{ pageNo, setPageNo, pageSize, setPageSize }}
                                    />
                                )
                            }
                        </Container>
                    </>)
            }




        </>
    )


}

export default Products;