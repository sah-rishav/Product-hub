import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import custom from './custom.jpeg'
import frame from './frame.jpeg'
import litho from './litho.jpeg'


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
    <img style={{   height: "500px",
            width: "auto"}}
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
    <img style={{   height: "500px",
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
    <img style={{   height: "500px",
            width: "auto"}}
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
<h3 style={{ margin: '10px 8px',
color:'grey'}}>About US</h3>
<div style={{paddingLeft: '10px'}}>
<p style={{backgroundColor:'#f2f2f2'}}>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
   fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum."</p>
</div>
<h3 style={{ margin: '10px 8px',
color:'grey'}}>Feature Products</h3>
            
        </div>

    )}