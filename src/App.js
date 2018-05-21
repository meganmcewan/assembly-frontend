import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Furniture from "./components/Furniture";
import Goods from "./components/Goods";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/furniture-design" component={Furniture} />
          <Route path="/home-goods" component={Goods} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
