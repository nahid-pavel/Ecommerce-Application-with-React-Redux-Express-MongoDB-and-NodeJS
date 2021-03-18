import React, { useState, useEffect } from 'react';

import {useSelector,shallowEqual} from 'react-redux';
import ItemCard from '../../_helper/ItemCard';
import Loading from '../../_helper/Loading';
import './product.css';
import {useDispatch} from 'react-redux';
import Carousal from './Carousal';
import { Container } from 'react-bootstrap';
import PaginationTable from '../../_helper/_tablePagination';
import { getAllProductsActions } from './_redux/Actions';


const Products = () => {
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(true);
    const [pageNo, setPageNo] = useState(0)
    const [pageSize, setPageSize] = useState(15);
    const products = useSelector((state) => {
        return state.product?.allProducts;
      }, shallowEqual);
    const setPositionHandler = (pageNo, pageSize) => {
        dispatch(
            getAllProductsActions(
                
                setLoading,
                pageNo,
                pageSize
            )

        )
       

    }



    useEffect(() => {
        dispatch(
            getAllProductsActions(
                
                setLoading,
                pageNo,
                pageSize
            )

        )

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])



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
                            <div className="pagination">
                            {
                                products?.products?.length > 0 && (
                                    <PaginationTable
                                        count={products?.totalCount}
                                        setPositionHandler={setPositionHandler}
                                        paginationState={{ pageNo, setPageNo, pageSize, setPageSize }}
                                    />
                                )
                            }

                            </div>
                           
                        </Container>
                    </>)
            }




        </>
    )


}

export default Products;