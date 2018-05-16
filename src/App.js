import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home.js";
import About from './components/About.js'
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  
  render() {
   
    return (

      <Router>
        <div className="App">
          <Nav />
          <Route exact path = '/' component ={Home}/>
          <Route path = '/about' component ={About}/>

          {/* <Route
          path='/projects'
          render={(props) => <Projects {...props} id={this.project.id} />}
        /> */}
          <Route path = '/projects' component ={Projects}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
