import React from 'react';

import silder from '../../public/slider1.png'
import slider1 from '../../public/slider2.png'
import slider2 from '../../public/slider3.png'
import slider3 from '../../public/slider4.png'
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
    return (
        <div>
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}

                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >
                {/* Carousel image setup manually */}
                <div>
                    <Image src={slider1} loading='lazy' objectFit="contain" alt='promotion-image' />
                </div>
                <div>
                    <Image src={slider2} loading='lazy' alt='promotion-image' />
                </div>
                <div>
                    <Image src={slider3} loading='lazy' alt='promotion-image' />
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;