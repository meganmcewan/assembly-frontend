import React, { Component } from "react";
import "../App.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let furnitureURL = "http://localhost:8888/wp-json/wp/v2/about";
    fetch(furnitureURL)
      .then(response => response.json())
      .then(response => {
        this.setState({ about: response });
      });
  }

  displayAbout = () => {
    let about = this.state.about[0];
    console.log("this is about", about);
    return (
      <div>
        <h1 className="project-title">ABOUT</h1>
        <div className='gallery'>
        <div className='about-wrapper'>
          <img
            src={
              about.better_featured_image.media_details.sizes.medium_large
                .source_url
            }
            alt={about.better_featured_image.alt_text}
          />
          <div>
          <div className='about-title'>SHANNA flodstrom</div>
            <div
              className="project-info about-info"
              dangerouslySetInnerHTML={{
                __html: about.content.rendered
              }}
            />
          </div>
          </div>
            
        </div>
   
      </div>
    );
  };

  render() {
    return (
      <div className="App">{this.state.about ? this.displayAbout() : null}</div>
    );
  }
}

export default About;
