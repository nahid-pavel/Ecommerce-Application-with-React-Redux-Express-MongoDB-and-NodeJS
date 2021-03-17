import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './product.css';

export default function Carousal({ products }) {
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
                                <div className="imageContainer">
                                  <img src={item?.image} className="image"/> 
                                </div>
                               
                               
                            </div>

                        </>
                    )
                })
            }

        </Carousel>
    )
}
