import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'

class Caro extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 



                <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://softcube.com/wp-content/uploads/2018/12/facebook-carousel-ads-featured-image.jpg"
                    style= {{height: "100%", width: "auto"}}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i0.wp.com/divinotes.com/wp-content/uploads/2017/08/Free-WordPress-Logo-Carousel-hero.jpg?fit=3200%2C1800&ssl=1"
                    alt="Third slide"
                    style= {{height: "100%", width: "auto"}}
                  />
              
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://mcsf23.com/wp-content/uploads/2018/09/bootstrap-carousel-auto-cycle.jpg"
                    alt="Third slide"
                    style= {{height: "100%", width: "auto"}}
                  />
                </Carousel.Item>
              </Carousel>
        );
    }
}
 
export default Caro;