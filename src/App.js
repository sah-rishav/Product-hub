import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";

import Footer from "./Footer";
import Home from "./Home";
import Articles from "./Articles";
import About from "./About";
import Prgrid from "./Prgrid";
import NavbarPage from "./NavbarPage";
import "./App.css";



class App extends Component {
  render() {
    return (
      <>
        <Router>
        <div id="container">
          
          <div id="Navbarpage">
            <NavbarPage />
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
            <div id="Prgrid">
              <Prgrid />              
            </div>
            
            <div id="Articles">
              <Articles />
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
