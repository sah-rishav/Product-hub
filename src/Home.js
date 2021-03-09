import React from "react";
import { Button} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import custom from './custom.jpeg'
import frame from './frame.jpeg'
import litho from './litho.jpeg'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

export default function Home() {
    return (
        <div style={{ 
            
            paddingTop: "60px",            
            paddingBottom: "50px",
            height: "170px",
            width: "auto"
            }}>
            
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={frame}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>FRAMES</h3>
      
      <button type="button" class="btn btn-warning">Place Order</button>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{   height: "750px",
            width: "auto"}}
      className="d-block w-100"
      src={custom}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>CUSTOM</h3>
      <button class="btn btn-warning my-2 my-sm-0" type="submit">Place Order</button>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={litho}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>LITHOPHANES</h3>
      <button type="button" class="btn btn-warning">Place Order</button>
      
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>

    )}