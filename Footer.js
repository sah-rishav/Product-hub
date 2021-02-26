import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

const FooterPage = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-info navbar-info">

    <Footer className="font-small pt-2 mt-1">
      <Container fluid className="text-center text-md-left">
        <Row>          
            <h5 className="title">Contact Us: </h5>
            
            <p className="footer-contents text-center pl-2">
            Email id: sahrishav30@gmail.com
            </p>
                   
        </Row>
      </Container>
      <div className="footer-copyright text-center">
       <p>@ Copyright Rishav</p>
      </div>
    </Footer></nav>
  );
}

export default FooterPage;