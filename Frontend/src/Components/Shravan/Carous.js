import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css"
export default function Carous() {
    return (
        <Carousel>
        <div>
            <img src='./images/carousel4.jpg' style={{height:"15rem"}}   />
        </div>
        <div>
            <img src='./images/carousel1.jpg' style={{height:"15rem"}}  />
        </div>
        <div>
            <img src='./images/carousel2.jpg' style={{height:"15rem"}}  />
        </div>
        <div>
            <img src='./images/carousel2.jpg' style={{height:"15rem"}}  />
        </div>
    </Carousel>
    )
}
