import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useSelector, shallowEqual } from 'react-redux';
import ItemCard from '../../_helper/ItemCard';
import Loading from '../../_helper/Loading';
import './product.css';
import { useDispatch } from 'react-redux';
import Carousal from './Carousal';
import { Container } from 'react-bootstrap';

import { getAllProductsActions } from './_redux/Actions';


const Products = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
  
    const products = useSelector((state) => {
        return state.product?.allProducts;
    }, shallowEqual);
    



    useEffect(() => {
        dispatch(
            getAllProductsActions(

                setLoading
              
            )

        )

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])



    return (
        <div className='home'>




            {loading ? <Loading /> :

                (
                    <>
                        <Container>
                            <Carousal products={products?.products} />
                        </Container>

                        <Container>
                            <div className="row">
                                <div className="col-md-12 mt-5 collections-title">
                                    <h2>Collections</h2>
                                    
                                </div>

                            </div>

                            <div className="row">

                            <Box display="flex" justifyContent="center" alignItems="flex-start" flexWrap="wrap">

                                {
                                    products?.products?.map((product, index) => (

                                        <div key={index} className="product-item col-md-4">
                                            <ItemCard product={product} />
                                              
                                        </div>




                                    ))

                                }
                                </Box>



                            </div>
                            

                        </Container>
                    </>)
            }




        </div>
    )


}

export default Products;