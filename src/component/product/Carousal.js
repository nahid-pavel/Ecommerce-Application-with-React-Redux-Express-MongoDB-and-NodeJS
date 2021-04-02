import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {useHistory} from 'react-router-dom';

import './product.css';
import { Button } from 'react-bootstrap';

export default function Carousal({ products }) {
    const history =useHistory();
    return (
        <Carousel autoPlay={true}
            showArrows
            infiniteLoop
            swipeable
            stopOnHover
            showThumbs={false}
            emulateTouch
            dynamicHeight
            centerSlidePercentage={40}>
            {
                products?.map(item => {
                    return (
                        <>
                            <div className="slideContainer">

                                <img src={item?.image} className="imageContainer" />
                                <div className="textDirection">
                                    <h2>{item?.name}</h2>
                                    <Button onClick={()=>history.push(`/products/${item?._id}`)}variant="success">Shop Now</Button>{' '}

                                </div>



                            </div>

                        </>
                    )
                })
            }

        </Carousel>
    )
}
