import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

import "./App.css";



class App extends Component {
  render() {
    return (
      <>
        <Router>
        <div id="container">
          <div id="header" className="sticky">
            <Header />
          </div>
          {/*<div id = "routes">
            <Routes />
    </div>*/}
    <div id="Home">
            <Home />
            </div>
      <div id="About">
              <About />
            </div>
            <div id="Products">
              <Products />
           </div>
          <div id="body" />
          
          <div id="footer">
                  
           <Footer />
          
          
      </div>
      </div>
        </Router>
      </>
    );
  }
}

export default App;
